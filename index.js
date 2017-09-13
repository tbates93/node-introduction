var express = require('express');
var bodyParser = require('body-parser')
var bookController = require('./controllers/books_controller.js')

var app = express();

app.use(bodyParser.json())
app.use( express.static("./public/build") );

app.get('/api/books',bookController.read)
app.get('/api/books/:id',bookController.readByID)
app.post('/api/books',bookController.create)
app.put('/api/books/:id',bookController.update)
app.delete('/api/books/:id',bookController.delete)


app.listen(3000, function(){
    console.log("We have ears on 3000")
})