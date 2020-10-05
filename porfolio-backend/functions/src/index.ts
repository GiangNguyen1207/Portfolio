require("dotenv").config();
const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
import { Request, Response, NextFunction } from "express";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const { OAuth2 } = google.auth;

const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRECT,
  process.env.URI
);

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});
const accessToken = oauth2Client.getAccessToken();

app.post("/sendEmail", (req: Request, res: Response, next: NextFunction) => {
  const data = {
    from: req.body.name,
    to: process.env.GMAIL,
    subject: req.body.name + " " + req.body.title,
    text: req.body.content,
  };

  const smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      type: "OAuth2",
      user: process.env.GMAIL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });

  smtpTransport.sendMail(data, function (error: any) {
    if (error) {
      console.log(error);
      res.status(400);
      res.json({ error: "Failed to send email" });
    } else {
      res.json({ status: 200, message: "Email sent successfully" });
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

exports.app = functions.https.onRequest(app);
