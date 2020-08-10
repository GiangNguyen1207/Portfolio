require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/sendEmail', (req, res, next) => {
  const data = {
    from: req.body.name,
    to : process.env.GMAIL,
    subject: req.body.name + req.body.title,
    text: req.body.content
  }

  const smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      type: "OAuth2",
      user: process.env.GMAIL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENTSECRECT,
      refreshToken: process.env.REFRESHTOKEN
    }
  })

  smtpTransport.sendMail(data, function(error) {
    if(error) {
      console.log(error)
      res.status(400);
      res.json({ error: "Failed to send email" });
    } else {
      res.json({status: 200, message:'Email sent successfully'})
    }
  })
}) 

app.get('/', (req, res) => {
  console.log('Ok')
  res.json(200)
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})