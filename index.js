const express = require('express');
const port = 3000;
const app = express();


app.get('/', (req, res) => {
    res.send("You are connected with home route");
})

app.listen(port, () => {
    console.log(`Server is up running on PORT ${port}! ready to handle request`);
})