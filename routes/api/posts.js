const express = require('express');
const router = express.Router();

// Post model
const Post = require('../../models/Post');

// @route GET api/posts
// @desc Get all posts
// @access Public
router.get('/', (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts));
});

// @route POST api/posts
// @desc Create a Post
// @access Public
router.post('/', (req, res) => {
  const newPost = new Post({
    id: req.body.newPost.id,
    content: req.body.newPost.content,
    date: req.body.newPost.date
  });

  newPost.save()
    .then(post => res.json(post))
    .catch(err => console.log('POST error: ', err.errors.id.message));
});

// @route DELETE api/posts
// @desc Delete a Post
// @access Public
router.delete('/', (req, res) => {
  console.log(req.body.id);
  
  Post.deleteOne({'id': req.body.id, 'content': req.body.content})
    .then(post => post.remove().then(() => res.json({ success: true })))
    .catch(err => res.json({ success: false }));
});

module.exports = router;