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
  // app.get('/', function(req, res){
    
  // });
  app.post('/contact', function(req, res) {
    // console.log(req.body);
    // res.status(200).send({"message": "Data received"});

    data = req.body;

    let mailOption = {
        from: 'hnakae27@gmail.com',
        to: 'nakae27@gmail.com',
        subject: 'Portfolio Visitor: '+data.name,
        text: data.message
    };

    transporter.sendMail(mailOption, function(err, data){
        if (err) {
            console.log("error occurs: ", err);
        } else {
            console.log('email sent');
        }
    });
  });
  // application -------------------------------------------------------------
  app.get('*', function(req, res) {
    res.sendFile('./src/index.html'); // load the single view file (angular will handle the page changes on the front-end)
  });
}

// const {name, email, message} = req.body;
//     console.log(name);
//     if (!(name === 'undefined' || email === 'undefined' || message === 'undefined')) {
//       const mailOptions = {
//         to: 'nakae27@gmail.com', // receiver address
//         subject: 'Portfolio Visitor', // subject line
//         text: '[' + email + '] : ' +message // plain text body
//       };

//       // Return 'success' or 'error' message following email attempt
//       transporter.sendMail(mailOptions, function (error) {
//           if (error) {
//               res.send('Hmm, something went wrong..');
//               return console.log(error);
//           } else {
//               res.send('Email sent.');
//           }
//       });
//     } else {
//       res.send('Stop that');
//     }