const http = require('http')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs_crud'
})

const HOSTNAME = 'localhost'
const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    if(req.url == '/insert'){
        insert(connection)
        res.end("Data inserted successfully")
    }
})

server.listen(PORT, HOSTNAME, (req, res) => {
    console.log(`Nodejs server running at http://${HOSTNAME}:${PORT}`)
})

function insert(con) {
    let QUERY = "INSERT INTO `users` (`id`, `name`, `phone`) VALUES (NULL, 'Admin', '0123456789')"
    con.query(QUERY, (err) => {
        if(err) console.log(err)
        else console.log('Data inserted successfully')
    })
}