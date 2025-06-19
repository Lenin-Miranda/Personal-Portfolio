const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const emailRouter = require("./routes/email");
dotenv.config();

const { PORT = 3001 } = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/send-email", emailRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
