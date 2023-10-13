const express = require('express')
const app = express()


app.get('/',function(req, res){
    res.send('Home page')
})

app.get('/hola-mundo',(req, res)=>{
    res.send('Hola mundo en su respectiva ruta')
})

//Para las rutas __dirname y sendFile nos indica que archivo abrir 
app.get('*',function(req,res){
    res.send('404 | Page Not Found')
})

app.listen(8080)
