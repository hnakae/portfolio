
// set up ======================================
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const database = require('./config/database');
// const api = require('./server/routes/api');
const app = express();

// configuration ================================
mongoose.set('useCreateIndex', true);
mongoose.connect(database.url, {useNewUrlParser: true});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/portfolio')));
// app.use('/api', api);

//=============================================
const nodemailer = require('nodemailer');
require('dotenv').config();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});
// let mailOption = {
//     from: 'hnakae27@gmail.com',
//     to: 'nakae27@gmail.com',
//     subject: 'Portfolio Visitor: '+data.name,
//     text: data.message
// };

// transporter.sendMail(mailOption, function(err, data){
//     if (err) {
//         console.log("error occurs: ", err);
//     } else {
//         console.log('email sent');
//     }
// });

// app.post('/contact', function(req, res) {
//     const {name, email, message} = req.body;
//     console.log(name);
//     if (!(data.name === 'undefined' || data.email === 'undefined' || data.message === 'undefined')) {
//         const mailOptions = {
//             to: 'nakae27@gmail.com', // receiver address
//             subject: 'Portfolio Visitor', // subject line
//             text: '[' + data.email + '] : ' +data.message // plain text body
//         };

//         // Return 'success' or 'error' message following email attempt
//         transporter.sendMail(mailOptions, function (error) {
//             if (error) {
//                 res.send('Hmm, something went wrong..');
//                 return console.log(error);
//             } else {
//                 res.send('Email sent.');
//             }
//         });
//     } else {
//         res.send('Stop that');
//     }
    
// });



// routes =======================================
require('./server/routes/routes.js')(app);

// listen =======================================
const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Server running on localhost:${port}`));
