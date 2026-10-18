const express = require('express');
const app = express();

const PORT = 4000;


//Middleware to parse JSON request bodies
app.use(express.json());


//Dynamic route with route parameter(:username) and query parameter (role)
// app.get('/welcome/:username', (req, res) => {
//     const {username} = req.params;
//     const {role} = req.query;

//     if(role){
//         res.send(`Welcome ${username}, your role is ${role}`);
//     } else {
//         res.send(`Welcome ${username}!`);
//     }
// });


//Logging Middleware: Logs request method endpoint, 
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});

// 1. GET /products
app.get("/products", (req, res) => {
    res.send("Here is the list of all products.");
});

// 2. POSt /products
app.post("/products", (req, res) => {
    res.send("A new product has been added.");
});

// 3. GET /categories
app.get("/categories", (req, res) => {
    res.send("Here is the list of all categories.");
});

// 4. POST /categories
app.post("/categories", (req, res) => {
    res.send("A new category has been created.");
});


// Wildcard 404 handler (must be placed after all valid routes)
// app.use((req, res) => {
//   res.status(404).send('<h1>404 - Page Not Found</h1>');
// });


// Start listening on port 4000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});