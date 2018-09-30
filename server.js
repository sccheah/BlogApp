const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// TODO: use routes, create post schema

const posts = require('./routes/api/posts');
const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, {useNewUrlParser: true}) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


app.use(bodyParser.json());
app.use('/api/posts', posts);

// app.get('/api/posts', (req, res) => {
//   res.json(posts);
// });

// app.post('/api/posts', (req, res) => {
//   console.log('received: ', req.body.newPost);
//   posts.unshift(req.body.newPost);

//   res.end('POST successful', req.body.newPost);
// });

// app.delete('/api/posts', (req, res) => {
//   console.log('deleting...', req.body.id);

//   let index = posts.findIndex(post => post.id === req.body.id);
//   posts.splice(index, 1);

//   res.end('DELETE successful: ', req.body.id);
// });

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));