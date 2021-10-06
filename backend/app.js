const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const config = require("./config");

const Post = require('./models/post');

const app = express();

mongoose.connect(config.dbUrl,{useUnifiedTopology:true})
.then(() => {
  console.log("Connected to the database");
})
.catch(() => {
    console.log("Connection to database failed");
});

app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.post('/api/post', (req, res, next) => {
   const post = new Post({
        title: req.body.title,
        content: req.body.content
    });

    console.log(post);
    post.save().then((result)=>{
        res.status(201).json({
            message: 'Post added successfully',
            postId: result.id
        });
    });
   
});

app.get('/api/posts', (req, res, next) => {
    Post.find()
    .then((documents) => {
         console.log(documents);
         res.status(200).json({
             message: 'Post fetched sucesfully',
             posts: documents
         });
    })
 });

 app.delete ('/api/posts/:id', (req, res, next) => {
    Post.deleteOne({ _id: req.params.id}).then((result) => {
      console.log(result);
      res.status(200).json({message: "post deleted"});  
    });

 });
 

module.exports = app;