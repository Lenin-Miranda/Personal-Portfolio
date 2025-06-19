const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/", async (req, res) => {
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

  const confirmationToCient = {
    from: `Lenin Miranda <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Thank you for contacting me!`,
    text: `Hi ${name},\n\nThanks for reaching out to me. I'll contact you as soon as posible`,
  };
  try {
    await transporter.sendMail(mailToCompany);
    await transporter.sendMail(confirmationToCient);

    res
      .status(200)
      .json({ success: true, message: "Correo enviado con éxito" });
  } catch (error) {
    console.error("Error al enviar el correo", error);
    res
      .status(500)
      .json({ success: false, message: "Error al enviar el correo" });
  }
});
module.exports = router;
