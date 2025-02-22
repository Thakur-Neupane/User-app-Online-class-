export const makeHtmlStrig = (userArg) => {
  const str = userArg.reduce(
    (acc, user) =>
      user.length
        ? acc + ` <li>${user.split(",")[0]}: ${user.split(",")[1]}</li>`
        : acc,
    ""
  );

  return (
    `
      <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous"
      />
  
      <link rel="stylesheet" href="style.css" />
      <title>My User diary</title>
      <style>
        /* body {
          margin: 0;
          padding: 0;
        }
  
        .wrapper {
          font-size: 2rem;
        }
        nav {
          display: flex;
          justify-content: space-between;
          padding: 1rem;
        }
        a {
          color: white;
        } */
      </style>
    </head>
    <body>
      <div class="wrapper">
        <nav style="background: black; color: white">
          <div>SRR</div>
          <div>
            <a href="/">Home</a>
            <a href="/login">Login</a>
            <a href="/register">register</a>
          </div>
        </nav>
     
       
        <div class="container">
        <h1>Welcome to our community!</h1>
        <hr /> <ul>` +
    str +
    `</ul></div>
  
        
      </div>
    </body>
  </html> 
      `
  );
};
