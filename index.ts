import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const { name = 'World' } = req.query;
  res.send({
    message: `Hello, ${name}!`
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 