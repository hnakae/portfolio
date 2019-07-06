
// set up ======================================
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const database = require('./config/database');
const api = require('./server/routes/api');
const app = express();

// configuration ================================
// mongoose.connect(database.url);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/portfolio')));
// Set our api routes
app.use('/api', api);
// Catch all other routes and return the index file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/portfolio/index.html'));
// });

// routes =======================================
require('./server/routes/routes.js')(app);

// listen =======================================
const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));
