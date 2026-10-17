const express = require('express');
const port = 3000;
const app = express();


//custom middleware

app.use("/welcome", (req, res, next) => {
    req.user = "Guest";
    next();
})

app.get("/welcome", (req, res, next) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
})

//Authentication Middleware
// app.use((req, res, next) => {
//     console.log("Authentication middleware called");
//     next();
// })

// app.use("/library-2",  (req, res, next) => {
//    console.log("Book recommendation");
//    next();
// })

// app.use("/library-3", (req, res, next) => {
//     console.log("Special access to research paper from professor and senior");
//     next();
// })

// app.get("/library-2", (req, res, next)  => {
//    res.send("<h1>Library 2 Entered</h1>")
// })

// app.get("/library-3", (req, res, next) => {
//     res.send("<h1>Library 3 Entered</h1>");
// })



app.listen(port, () => {
    console.log(`Server is up running on PORT ${port}! ready to handle request`);
})