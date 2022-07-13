// import express
const express = require('express')

// use express
const app = express()

// send a hello word
// request = client -> server
// response = server -> client

// get = mengirimkan request, tanpa ada info yang dikirimkan
// post = mengirimkan request, beserta adanya info yang dikirimkan

// root endpoint
app.get('/', function (req, res) {
    res.send('Hello world')
})

app.get('/aditiya', function (req, res) {
    res.send('this is homepage')
})

// port
const port = 5000
app.listen(port, function () {
    console.log(`server running on port : ${port}`);
})