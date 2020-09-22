var path = require('path')
const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const { request } = require('express');
const axios = require("axios");
const { send } = require('process');
const bodyParser = require('body-parser');
const app = express()
app.use(cors());
const fetch = require('node-fetch')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());


// app.use(express.static('dist'))
app.use(express.static('src/client/views'))

console.log(__dirname)

app.get('/pixabay/:cleanLocation', async (request, response) => {
  console.log('raw data', request.params)
  const cleanLocation = request.params.cleanLocation;
  console.log("cleanlocation", cleanLocation)
  const api_url = `https://pixabay.com/api/?key=${process.env.API_pixabay}&q=${cleanLocation}&image_type=photo`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  response.json(json);  
})

app.get('/weatherbit/:latlondays', async (request, response) => {
  const latlondays = request.params.latlondays.split(',');
  const lat = latlondays[0];
  const lon = latlondays[1];
  const days = latlondays[2];
  const api_url = `http://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&days=${days}&key=${process.env.weatherbit_api}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  response.json(json);  
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
   })

module.exports = {app};
