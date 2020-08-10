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
    to : 'nguyengiang.nchg@gmail.com',
    subject: req.body.name + req.body.title,
    text: req.body.content
  }

  const smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      type: "OAuth2",
      user: 'nguyengiang.nchg@gmail.com',
      clientId: '827944169415-vhvdmbp90c8cpk2emagbr1aftmads6kd.apps.googleusercontent.com',
      clientSecret: 'i6d_rReAebbRyldcI44mSHFx',
      refreshToken: '//04V146TAEKeLSCgYIARAAGAQSNwF-L9Ir372nr1XdfBFmZ56goXfGbPETjAte6igXoWZZFTG4E6S4hfA5ZO2I2PCLtcMCoLVBVz0',
      accessToken: 'ya29.a0AfH6SMBpKn68pjyqGjaq9FPRV-kNaVOUZgPlDDwa5lApn8wLWN9e9OOpCKDbG8xT1_bTF8ysxP3Yk6K1oQAmmUTWRoauLAMHrk9kXEAQKe6ZCnT2u6HbVqe4T6T8WPi48NqQRldd6WA_55y-l5H2ob09HUU4h0O_wtU'
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