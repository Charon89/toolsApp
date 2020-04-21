const express = require("express");
const path = require("path");

const app = express();

const HTTP_PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/angular-practice-v1'));

// PathLocationStrategy
app.use((req, res) => {
  res.sendFile(path.join(__dirname + "/dist/angular-practice-v1/index.html"));
});

console.log('Server is running...');

app.listen(HTTP_PORT, () => {
  console.log("listening on port: " + HTTP_PORT);
});
