import 'dotenv/config';
import express from 'express';
import os from 'os';

const app = express();
const host = '127.0.0.1';
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send(`<h1>${os.hostname()}</h1>`);
});

app.listen(port, host, () =>
  console.log('Server running at http://%s:%s', host, port)
);
