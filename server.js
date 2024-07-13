import express from "express";

const app = express();

const PORT = 8001;

app.get("/", (req, res, next) => {
  console.log("I have got the request");
  res.send("<h1>Hello Server Dev</h1>;");
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(` Server is running at http://localhost:${PORT}`);
});
