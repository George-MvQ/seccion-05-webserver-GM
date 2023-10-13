//agregando ruta de 404.html
const express = require('express')
const app = express()
const port = 8080


app.use(express.static('public'))


app.get('/', (req, res) => {
    res.send('Home page')
})

//Servir para la ruta el app.get valida las rutas
app.get('/hola-mundo',(req, res)=>{
    res.send('Hola mundo en su respectiva ruta')
})

//Para las rutas __dirname y sendFile nos indica que archivo abrir 
app.get('*',(req,res)=>{
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, ()=>{
    console.log(`Example app listen at http://localhost ${port}`);
})



