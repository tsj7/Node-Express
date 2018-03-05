const express = require("express");
const bodyParser = require("body-parser");

const server = express();
const PORT = 5000;

server.use((req, res, next) => {
  console.log(`here is the request`, req);
  next();
});

server.post("/users", (req, res) => {
  const {
    friend
  } = req.body;
});


server.listen(PORT, (err) => {
  if (err) {
    console.log(`there was an error`, err);
  } else {
    console.log(`server listening on port ${PORT}`);
  }
});
