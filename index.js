const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('<h1>This is an app from web app.</h1>')
})

//built-in middleware
app.get('/json', (req, res) => {
    res.status(200).json({title : 'My First App = Our Web App API.'})
})

app.get('/redirect', (req, res) => {
    res.redirect('https://www.google.com')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>404 This page is not founded.</h1>')
})

app.listen(8002, () => console.log("started on port 8002"))

