const express = require('express');
const app = express();
const PORT = 4000;

const orderRouter = require('./routes/orders');
const userRouter = require('./routes/users');
const bookRoutes = require('./routes/books');

//Logging Middleware: Logs request method endpoint, 
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});

app.use("/orders", orderRouter);
app.use("/users", userRouter);
app.use(bookRoutes);



// Start listening on port 4000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});