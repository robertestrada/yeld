import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import path from 'path';
// import cors from 'cors';

const port: string | number = process.env.PORT || 5000;

// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/yeld-api', (req, res) => {

  // Return them as json
  res.json("hit yeld api");

  console.log(`hit yeld api`);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

app.listen(port);