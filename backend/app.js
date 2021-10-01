const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Headers",
//         "Origin, X-Requested-With,Content-Type, Accept"
//     );
//     res.setHeader("Access-Control-Allow-Methods",
//         "GET, POST, PATCH, DELETE, OPTIONS");
//     next();
// });

app.post('/api/posts', (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: 'Post added successfully'
    });
});

app.use('/api/posts', (req, res, next) => {
    const posts = [
        {
            id: "faf122",
            title: "first server-side-post",
            content: "This is coming from server"
        },
        {
            id: "faf122",
            title: "Vanessa Van Edwards",
            content: "Captive: Books"
        }
    ]
    res.status(200).json({
        message: 'Message was good',
        post: posts
    });
});

module.exports = app;