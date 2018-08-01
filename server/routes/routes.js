var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../mailer/config/index');

var transport = {
  host: 'smtp.gmail.com',
    port: 465,
    secure: true,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});
router.post('/api/send', (req, res, next) => {
  console.log("Request received", req.body)
  var name = req.body.name;
  var email = req.body.email; 
   var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${message} `;

  var mail = {
    from: name,
    to: 'combatstriker111@gmail.com',  //Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }
    console.log(name);
    console.log(email);
    console.log(content);
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail '+ err.message
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

module.exports = router;