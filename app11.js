//agregando ruta de 404.html
const express = require('express')
const app = express()
const port = 8080

//Servir contenido estatico public2 donde esta el templated
app.use(express.static('public2'))

//Habilitamos la ruta generic http://localhost:8080/generic
app.get('/generic', (req, res) => {
    res.sendFile(__dirname+'/public2/generic.html')
})



//Servir para la ruta el app.get valida las rutas
app.get('/elements',(req, res)=>{
    res.sendFile(__dirname +'/public2/elements.html')
})

app.get('*',(req, res)=>{
    res.sendFile(__dirname +'/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    
})

