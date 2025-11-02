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
  "https://www.leninmiranda.com",
  "https://portfolio-backend-18x1.onrender.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Permitir requests sin origin (ej: aplicaciones móviles o Postman)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) !== -1) {
        return callback(null, true);
      } else {
        console.log("Origin not allowed by CORS:", origin);
        return callback(new Error("CORS no permitido por el servidor."), false);
      }
    },
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
    ],
  })
);
// Middleware adicional para manejar preflight requests
app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  res.sendStatus(200);
});

app.use(express.json());
app.use("/send-email", emailRouter);
app.use("/", (req, res) => {
  res.send("Email server is running.");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
