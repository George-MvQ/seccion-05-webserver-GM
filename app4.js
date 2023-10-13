const express = require('express')
const app = express()

app.get('/',function(req, res){
    res.send('Hola mundo ejercicio 4')
})

app.listen(8080)



