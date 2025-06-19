const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const emailRouter = require("./routes/email");
dotenv.config();

const { PORT = 3001 } = process.env;

const app = express();

const corsOptions = {
  origin: "https://lenin-miranda.github.io",
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/send-email", emailRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
