const port = 4000

const bodyParser = require('body-parser')
const server = require('express')()
const allowCors = require('./cors')


server.use( bodyParser.urlencoded({ extended: true }) )
server.use( bodyParser.json() )
server.use(allowCors)

server.use('/', (req, res, next) =>{
    console.log('teste')
    next()
})

server.get('/', (req, res, next) =>{
    res.json({
        isOnline: true
    })
})

server.listen(port, () => {
    console.log(`BACKEND is runing on port  ${port}`)
})


module.exports = server

