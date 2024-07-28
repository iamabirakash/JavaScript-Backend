const express = require('express')
const app = express()
const port = 3000

app.get("/",(req,res) => { //REQ RES Callback
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})