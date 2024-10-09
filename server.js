const express = require('express')
const server = express()
const pao = require('./src/data/pao.json')

const port = process.env.PORT || 8000;

server.get('/pao', (req, res) =>{
    return res.json(pao)
})

server.listen(port, () => {
    host: '0.0.0.0';
    console.log('servidor está funcionando ...')
})