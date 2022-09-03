const express = require('express');
const app = express();

const users = require('./routes/users');
const posts = require('./routes/posts');

app.get('/users/all', users.getAllUsers);
app.get('/posts/all', posts.getAllPosts);

app.listen(5000, function () {
  console.log('Started application on port %d', 5000);
});
