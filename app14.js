const express = require('express')
const hbs = require('hbs');
const app = express()
const port = 8080

app.set('view engine', 'hbs');

// Es donde se ubican los archivos a reutilizar
hbs.registerPartials(__dirname+'/views/partials')

app.use(express.static('public3'))

// controlador de la ruta principal
// aqui hacemos el llamdo de home.hbs no es necesario indicar el tipo de archivo
app.get('/', (req, res) => {
    res.render('home3', {
        nombre: 'GeorgeMv',
        titulo:'Curso de Node'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'GeorgeMv',
        titulo:'Curso de Node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'GeorgeMv',
        titulo:'Curso de Node'
    })
})


app.get('*',(req, res)=>{
    res.sendFile(__dirname +'/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    
})