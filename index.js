const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cors = require("cors");
const path = require("path");

const dotenv = require("dotenv");
dotenv.config();
app.use(cookieParser());

const { sendEmail } = require("./mail");

app.post("/api/sendEmail", (req, res) => {
  sendEmail(req);
});

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("Server Running at " + PORT);
});
