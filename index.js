const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let num = 0;

app.get('/', (req, res) => {
  console.log('hello world: ', num);
  num++;
  res.send('Hello World API called!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
