import express from "express";
const app = express();
const PORT = 8000;
import path from "path";
import fs from "fs";
import { makeHtmlStrig } from "./src/fileMerger.js";

const __dirname = path.resolve();
console.log(__dirname, "======");

//serve static file from the public directory

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   console.log("we got the request");

//   res.send(
//     "<h1>Hellow server dev</h1> <hr /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, impedit reiciendis unde ad itaque tenetur officiis quam doloremque vel similique aperiam natus pariatur necessitatibus recusandae quae totam suscipit deserunt nesciunt.</p>"
//   );
// });

// hope page controller
app.get("/", (req, res) => {
  //read the text file

  fs.readFile(fileName, "utf8", (error, data) => {
    if (error) {
      console.log(error);
      res.sendFile(__dirname + "/src/html/index.html");
    } else {
      res.send(makeHtmlStrig(data.split("\n")));
    }
  });

  //   res.sendFile(__dirname + "/src/html/index.html");
});

// user register controller
app.get("/register", (req, res) => {
  console.log(req.query);
  console.log("req received login");
  res.sendFile(__dirname + "/src/html/register.html");
});

const fileName = "userList.csv";
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const str = `${name},${email},${password}\n`;

  //   create file and write data

  fs.appendFile(fileName, str, (error) => {
    error ? res.send(error.message) : res.redirect("/");
    //   : res.send(
    //       `<h1 class="alert alert-success">User has been created, you may login now</h1>`
    //     );
  });

  //   res.sendFile(__dirname + "/src/html/register.html");
});

// User Login Controller
app.get("/login", (req, res) => {
  console.log("req received login");
  res.sendFile(__dirname + "/src/html/login.html");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const str = email + "," + password;

  //read data from file

  fs.readFile(fileName, "utf8", (error, data) => {
    if (error) {
      console.log(error);
      res.send(" ");
    } else {
      const person = data.split("\n").find((user) => user.includes(str));
      person?.length
        ? res.send(
            `<h1> Hey ${
              person.split(",")[0]
            }, You have successfully logged in</h1>`
          )
        : res.send(`<h1> Error, Invalid Login Details </h1>`);
    }
  });
});

// app.get("/api/v1/get-user", (req, res) => {
//   res.json({
//     fName: "Thakur ",
//     lName: "Neupane",
//   });
// });

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is runnit at http://localhost:${PORT}`);
});
