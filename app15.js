const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express()
const port = process.env.PORT

/* const port = 8080 */

app.set('view engine', 'hbs');

// Es donde se ubican los archivos a reutilizar
hbs.registerPartials(__dirname+'/views/partials')

app.use(express.static('public3'))

// controlador de la ruta principal
// aqui hacemos el llamdo de home.hbs no es necesario indicar el tipo de archivo
app.get('/', (req, res) => {
    res.render('home3', {
        nombre: 'George Vasquez',
        titulo:'Curso de Node'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'George Vasquez',
        titulo:'Curso de Node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'George Vasquez',
        titulo:'Curso de Node'
    })
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

