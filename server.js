const express = require('express')
const server = express()
const pao = require('./src/data/pao.json')

const port = process.env.PORT || 8000;
const host = '0.0.0.0';

server.get('/pao', (req, res) =>{
    return res.json(pao)
})

server.listen(port,host, () => {
    console.log('servidor está funcionando ...')
})