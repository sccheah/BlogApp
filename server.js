const express = require('express');

const app = express();

app.get('/api/posts', (req, res) => {
  const posts = [
    {id: '1', content: 'hello'},
    {id: '2', content: 'goodbye'},
    {id: '3', content: 'Third post'}
  ];

  res.json(posts);
});

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));