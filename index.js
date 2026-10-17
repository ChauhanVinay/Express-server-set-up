const express = require('express');
const port = 3000;
const app = express();


//Middleware to parse JSON request bodies
app.use(express.json());

//1. GET /orders
app.get("/orders", (req, res) => {
    res.send("Here is the list of all orders");
});

//2. POST /orders
app.post("/orders", (req, res) => {
    res.send("A new order has been created");
});

//3. GET /users
app.get("/users", (req, res) => {
    res.send("Here is the list of all users");
});


//4. POST /users
app.post("/users", (req, res) => {
    res.send("A new user has been added");
});



app.listen(port, () => {
    console.log(`Server is up running on PORT ${port}! ready to handle request`);
})