const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, './public')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});
app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
});


app.use(express.static('public'));

app.listen(process.env.PORT || 3000, function() {
    console.log('Servidor corriendo en puerto 3000');
});