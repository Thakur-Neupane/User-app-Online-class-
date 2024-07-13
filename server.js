import express from "express";

const app = express();

const PORT = 8001;

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(` Server is running at http://localhost:${PORT}`);
});
