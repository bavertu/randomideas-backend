const express = require('express');
const port = 5001;

const app = express();

const ideas = [
  {
    id: 1,
    text: 'Positive NewsLetter, a newsletter that only shares positive, uplifting news',
    tag: 'Technology',
    userName: 'TonyStark',
    date: '2022-01-02',
  },
];

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to the RandomIdeas API' });
});

//Get all ideas
app.get('/api/ideas', (req, res) => {
  res.json({ success: true, data: ideas });
});

app.get('/api/ideas/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resources not found' });
  }

  res.json({ success: true, data: idea });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
