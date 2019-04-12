const express = require('express');
const Results = require('./results');

const app = express();
app.disable('x-powered-by');

app.get('/populate', async (req, res, next) => {
  try {
    res.sendStatus(200);
    (async () => {
      console.log('Setting up distribution...');
      await Results.setupDistribution();
      console.log('Starting DB population...');
      await Results.generateFakeData(2016, 5, 80);
      console.log('Populated 2016...');
      await Results.generateFakeData(2017, 5, 100);
      console.log('Populated 2017...');
      await Results.generateFakeData(2018, 5, 120);
      console.log('Populated 2018...');
      await Results.generateFakeData(2019, 5, 140);
      console.log('Populated 2019...', 'Done populating DB!');
    })();
  } catch (err) {
    next(err);
  }
});

app.get('/', (req, res, next) => {
  try {
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

app.use('*', (req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  const { method, url, route } = req;
  const error = err.stack || err.toString();
  console.error(error);
  res.status(500).json({ method, url, route, error });
});

app.listen(5556, () => console.log('Listening on port 5556...'));
