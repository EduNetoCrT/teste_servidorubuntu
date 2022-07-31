const express = require('express');

const app =  express();

const port  = 3030;

app.get('/home', (req, res) => {
    res.sendFile(__dirname+'/html/index.html');
})

app.listen(port, () => {
    console.log(` Servidor rodando na porta ${port}`)
})