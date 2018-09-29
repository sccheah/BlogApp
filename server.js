const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let posts = [
];

app.use(bodyParser.json());

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.post('/api/posts', (req, res) => {
  console.log('received: ', req.body.newPost);

  posts.unshift(req.body.newPost);
});

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));