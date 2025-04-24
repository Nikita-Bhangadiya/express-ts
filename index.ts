import express from 'express';
import logger from 'morgan';

const app = express();
const port = 3000;

app.use(logger('dev'));

app.get('/', (req, res) => {
  const { name = 'World' } = req.query;
  res.status(200).send({
    message: `Hello, ${name}!`
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});