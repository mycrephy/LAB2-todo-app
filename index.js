const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Moddleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public')); //Serve static files(CSS)
app.set('view engine', 'ejs'); //Set ejs template

let todos = [];

//Routes
app.get('/', (req, res) => {
    res.render('index', {todos});
});

app.post('/add', (req, res) => {
    const newTodo = req.body.todo;
    if (newTodo) todos.push(newTodo);
    res.redirect('/');
});

app.post('/delete', (req, res) => {
    const index = req.body.index;
    todos.splice(index, 1);
    res.redirect('/');
});
    

//Start Server
const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`Server is running at http://localhost:${PORT}`);
});