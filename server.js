import dotenv from 'dotenv'
import express from 'express'
import http from 'http'
import path from 'path'
import IO from 'socket.io'
import configureSocket from './src/configure-socket'

dotenv.config()

const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 3000
const io = IO(server)

app.use(express.static(__dirname + '/public'))

configureSocket(io)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

server.listen(port, () => {
  console.log('Words Worth is streaming the interwaves on port ' + port)
})