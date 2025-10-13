const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/", async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailToCompany = {
    from: `${name} <${email}>`,
    to: process.env.EMAIL_USER,
    subject: `Nuevo mensaje de ${name}: ${subject}`,
    text: message,
  };

  const confirmationToClient = {
    from: `Lenin Miranda <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Thank you for contacting me!`,
    text: `Hi ${name},\n\nThanks for reaching out. I'll contact you as soon as possible.`,
  };

  try {
    await transporter.sendMail(mailToCompany);
    await transporter.sendMail(confirmationToClient);
    res
      .status(200)
      .json({ success: true, message: "Correo enviado con éxito" });
  } catch (error) {
    console.error("Error sending email", error);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
});

module.exports = router;
