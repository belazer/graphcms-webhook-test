const express = require('express');
const bodyParser = require('body-parser');
const app = express().use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/graphcms', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
})

app.listen(3000, function () {
  console.log('Webhooks tester listening on port 3000!');
});