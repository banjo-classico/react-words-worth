export default (io) => {
  io.on('connection', (socket) => {

    console.log('connection made')

    socket.broadcast.emit('populate')

    socket.on('action', (action) => {
      action.socket = false
      io.emit('action', action)
    })

    socket.on('disconnect', () => {
      console.log('SOCKET disconnected')
    })

  })
}