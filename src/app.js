const express = require("express");

const app = express();
app.use(express.json());

const airoutes =require("./routes/ai.routes");
const cors = require('cors');

app.use(cors());



app.get("/", (_req, res) => {
  res.send("Hello World");
});

app.use('/ai',airoutes);



module.exports = app;

