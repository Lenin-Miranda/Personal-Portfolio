const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const emailRouter = require("./routes/email");
dotenv.config();

const { PORT = 3001 } = process.env;

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://lenin-miranda.github.io",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        return callback(new Error("CORS no permitido por el servidor."), false);
      }
      return callback(null, true);
    },
  })
);
app.use(express.json());
app.use("/send-email", emailRouter);
app.use("/", (req, res) => {
  res.send("Email server is running.");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
