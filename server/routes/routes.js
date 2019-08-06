// var Project = require('../models/project');
const nodemailer = require('nodemailer');
require('dotenv').config();

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
  }
});

module.exports = function(app) {
  app.get('/contact', function(req, res){
    console.log(req.body);
  });
  // app.post('/contact', function(req, res) {
  //   const {name, email, message} = req.body;
  //   console.log(name);
  //   if (!(data.name === 'undefined' || data.email === 'undefined' || data.message === 'undefined')) {
  //     const mailOptions = {
  //       to: 'nakae27@gmail.com', // receiver address
  //       subject: 'Portfolio Visitor', // subject line
  //       text: '[' + data.email + '] : ' +data.message // plain text body
  //     };

  //     // Return 'success' or 'error' message following email attempt
  //     transporter.sendMail(mailOptions, function (error) {
  //         if (error) {
  //             res.send('Hmm, something went wrong..');
  //             return console.log(error);
  //         } else {
  //             res.send('Email sent.');
  //         }
  //     });
  //   } else {
  //     res.send('Stop that');
  //   }
  // });
  // application -------------------------------------------------------------
  app.get('*', function(req, res) {
    res.sendFile('./src/index.html'); // load the single view file (angular will handle the page changes on the front-end)
  });
}
