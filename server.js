const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello word')
})

app.listen(5000, function () {
  console.log('Started application on port %d', 5000);
});