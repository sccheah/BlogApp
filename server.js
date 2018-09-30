const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

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

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));