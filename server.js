import express from "express";
import path from "path";
import fs from "fs";
const app = express();

const __dirname = path.resolve();
console.log(__dirname, "______");

const PORT = 8001;
const fileName = "userList.csv";
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res, next) => {
//   console.log("I have got the request");
//   res.send("<h1>Hello Server Dev</h1>;");
// });

app.use(express.static(__dirname + "/public"));

// OR we can also do the code like this :-

// path.join(__dirname + "public");

// Homepage controllers
app.get("/", (req, res) => {
  console.log("request received!!");
  res.sendFile(__dirname + "/src/html/index.html");
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const str = `${name}, ${email}, ${password}\n`;
  fs.appendFile(fileName, str, (error) => {
    error ? res.send(error.message) : res.redirect("/");
    // : res.send(
    //     `<h1 class="alert alert-success">User has been created, You may login now!!!</h1>`
    //   );
  });
  console.log(req.body);

  // create file and write data

  res.sendFile(__dirname + "/src/html/register.html");
});

// app.get("/get-user", (req, res) => {
//   res.json({
//     fName: "Thakur",
//     lName: "Neupane",
//   });
// });

// User registration controllers
app.get("/register", (req, res) => {
  console.log("request received!!");
  console.log(req.query);
  res.sendFile(__dirname + "/src/html/register.html");
});

// User login controllers

app.get("/login", (req, res) => {
  console.log("data received!!");
  res.sendFile(__dirname + "/src/html/login.html");
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(` Server is running at http://localhost:${PORT}`);
});
