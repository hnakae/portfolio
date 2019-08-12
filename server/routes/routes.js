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
  app.post('/contact', function(req, res) {
    data = req.body;
    let mailOption = {
        from: process.env.EMAIL,
        to: process.env.EMAILTO,
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