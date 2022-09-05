const express = require('express');
const app = express();

const users = require('./routes/users');
const posts = require('./routes/posts');

app.disable('x-powered-by');

app.get('/users/all', users.getAllUsers);
app.get('/posts/all', posts.getAllPosts);

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log('Started application on port %d', PORT);
});
