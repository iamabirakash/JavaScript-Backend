const express = require('express')
const app = express()
const port = 3000

app.get("/",(req,res) => { //REQ RES Callback
    res.send("Hello World");
})
app.get("/login",(req,res) => {
    res.send("<h1>Hello Login</h1>");
})

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})