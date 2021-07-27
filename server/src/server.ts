import express from 'express';
import path from 'path';
const app = express()
const port: string | number = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/yeld-api', (req, res) => {

  // Return them as json
  res.json("hit yeld api");

  console.log(`hit yeld api`);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/public', 'index.html'));
});

app.listen(port);