const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

router.get('/', (req, res) => {
  const searchStr = req.query.q;
  const query = `http://api.openweathermap.org/data/2.5/forecast/?q=${searchStr}&units=imperial&cnt=7&appid=${process.env.OPEN_WEATHER_API_KEY}`
  console.log('query: ', query);
  axios.get(query)
    .then(response => {
      console.log(response.data.list);
      res.send(response.data.list)
    })
    .catch(error => {
      console.log(`Error getting weather ${error}`);
    });
});

module.exports = router;