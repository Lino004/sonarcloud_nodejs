function getAllPosts(request, response) {
  response.statusCode = 200
  response.send({ posts: ["A", "B"] });
}

module.exports = {
  getAllPosts
};