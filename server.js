import express from "express";
import path from "path";
const app = express();

const __dirname = path.resolve();
console.log(__dirname, "______");

const PORT = 8001;

// app.get("/", (req, res, next) => {
//   console.log("I have got the request");
//   res.send("<h1>Hello Server Dev</h1>;");
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/html/index.html");
});
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(` Server is running at http://localhost:${PORT}`);
});
