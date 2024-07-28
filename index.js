require('dotenv').config()
const express = require('express') // => Common JS
// import express from 'express'; // => Module JS
// TO USE THIS WE HAVE TO ADD "type": "module" into package.json
const app = express();
const port = 3000

app.get("/",(req,res) => { //REQ RES Callback
    res.send("Hello World");
})
app.get("/jokes",(req,res) => {
    const jokes = [
        {
            id: 1,
            title: 'A Joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'A Joke',
            content: 'This is a joke'
        },
        {
            id: 3,
            title: 'A Joke',
            content: 'This is a joke'
        },
        {
            id: 4,
            title: 'A Joke',
            content: 'This is a joke'
        },
        {
            id: 5,
            title: 'A Joke',
            content: 'This is a joke'
        }
    ];
    res.send(jokes);
})

app.listen(process.env.PORT, () => {
    console.log(`Serve at https://localhost:${port}`);
})