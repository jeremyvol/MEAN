// mongoDB pw VvVYToSgeEfwOSJw
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postRoutes = require('./routes/posts');

const app = express();

const connectUrl = 'mongodb://localhost:27017/node-angular';

// const connectUrl =
//   'mongodb+srv://jeremyv:VvVYToSgeEfwOSJw@cluster0-c2fum.mongodb.net/test?retryWrites=true&w=majority';
const connectConfig = {
  useNewUrlParser: true //Hide Deprecation Warning
};

mongoose
  .connect(connectUrl, connectConfig)
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/images', express.static(path.join('backend/images')));

app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );

  // Pass to next layer of middleware
  next();
});

app.use('/api/posts', postRoutes);

module.exports = app;
