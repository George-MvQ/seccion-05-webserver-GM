const express = require('express')

const hbs = require('hbs');
const app = express()
const port = 8080


app.set('view engine', 'hbs');

app.use(express.static('public3'))

// controlador de la ruta principal
// aqui hacemos el llamdo de home.hbs no es necesario indicar el tipo de archivo
app.get('/', (req, res) => {
    res.render('home')
})


app.get('/generic', (req, res) => {
    res.sendFile(__dirname+'/public3/generic.html')
})


//Servir para la ruta el app.get valida las rutas
app.get('/elements',(req, res)=>{
    res.sendFile(__dirname +'/public3/elements.html')
})

app.get('*',(req, res)=>{
    res.sendFile(__dirname +'/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    
})
