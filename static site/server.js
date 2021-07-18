const http = require('http')
const fs = require('fs')

const HOSTNAME = 'localhost'
const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    routes(req, res)
})

server.listen(PORT, HOSTNAME, (req, res) => {
    console.log(`Nodejs server running at http://${HOSTNAME}:${PORT}`)
})

function routes(req, res) {
    const status = 200
    res.statusCode = status
    res.setHeader('Content-Type', 'Text/html')
    const characterSet = 'utf8'
    const viewPath = 'views/'

    if(req.url == '/'){
        res.end(fs.readFileSync(`${viewPath}home.html`, characterSet))
    }else if(req.url == '/about'){
        res.end(fs.readFileSync(`${viewPath}about.html`, characterSet))
    }else{
        res.statusCode = 404
        res.end(fs.readFileSync(`${viewPath}404.html`, characterSet))
    }
}