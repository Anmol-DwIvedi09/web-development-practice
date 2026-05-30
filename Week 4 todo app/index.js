/*
const express = require('express')
const app = express()

// route handlers
// / route
// GET Method

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/', function (req, res) {
  res.send('Hello World from the post endpoint')
})

app.get('/asd', function (req, res) {
  res.send('Hello from the asd endpoint')
})

app.listen(3000)
*/

const express = require('express')
const app = express()

let todos = [];
// store the data in a file , foundation for databases
// add user logic

app.post('/', function (req, res) {
    // create a random id for the todo
    // extract the todo title from the body
    todos.push({
        title,
        id
    })
})

app.delete('/', function (req, res) {
    // extract the todo id
    // remove the todo from here
    todos.push({
        title,
    })
})

app.get('/', function (req, res) {
    res.json({
       todos,
    })
})

app.listen(3000) //which port