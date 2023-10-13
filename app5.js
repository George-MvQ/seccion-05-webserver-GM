const express = require('express')
const app = express()

app.get('/',function(req, res){
    res.send('Home page')
})
//Servir para la ruta el app.get valida las rutas
app.get('/hola-mundo',function(req, res){
    res.send('Hola mundo en su respectiva ruta')
})

app.listen(8080)
