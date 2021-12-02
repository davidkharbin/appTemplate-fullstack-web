const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const port = 3000;

// serve static files from dist dir
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Express server listening on port: ${port}`);
});

app.get('/newRouteHere', (req, res) => {
  res.send()
})

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/../client/dist' }, (err) => {
    if (err) {
      res.status(400).send(err);
    }
  });
});
