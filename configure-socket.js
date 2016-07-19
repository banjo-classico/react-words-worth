export default (io) => {
  io.on('connection', (socket) => {

    console.log('connection made')
    socket.emit('connected')

    socket.broadcast.emit('populate')

    socket.on('action', (action) => {
      action.socket = false
      socket.broadcast.emit('action', action)
    })

    socket.on('disconnect', () => {
      console.log('SOCKET disconnected')
      socket.broadcast.emit('remove', socket.id)
    })

  })
}