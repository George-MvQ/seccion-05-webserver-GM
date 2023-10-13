//George Moises Vasquez Quiche
const http = require('http')

http.createServer((req, res) =>{
    console.log(req)
    res.writeHead(200,{'Content-type':'application/json'})
    const persona = {
        id:1,
        nombre:'George'
    }
    res.write(JSON.stringify(persona))
    res.end();
}
)
.listen(8080)

console.log("ESCUCHANDO EN EL PUERTO 8080");



