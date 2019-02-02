const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const weatherRouter = require('./routes/weather.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

// Serve static files
app.use(express.static('build'));

// Routes
app.use('/api/search', weatherRouter);

// App Set
const PORT = process.env.PORT || 5000;

// LISTEN
app.listen(PORT ,() => {
  console.log(`Listening on port: ${PORT}`);
});