const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const key = process.env.API_KEY;
const API = 'https://maps.googleapis.com/maps/api/js?key='+key+'&callback=initMap';
const url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBEkdHuhopLCGmsNAOUJiusigM5AOJOMUk&callback=initMap';
/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;
