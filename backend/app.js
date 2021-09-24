const express = require('express');
const app = express();

app.use('/api/posts',(req, res, next) => {
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

app.use((req, res, next) => {
    res.send("hshshs");
    next();
});

module.exports = app;