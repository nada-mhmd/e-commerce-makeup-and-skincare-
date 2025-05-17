const express = require('express');
const transporter = require('./config/mailConfig');
require('dotenv').config();

const app = express();
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: process.env.MAIL_USER,
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Notification service running on port ${process.env.PORT}`);
});
