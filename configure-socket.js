export default (io) => {
  io.on('connection', (socket) => {

    console.log('connection made')

    socket.emit('populate')

    socket.on('action', (action) => {
      socket.emit('action', action)
    })

    socket.on('disconnect', () => {
      console.log('SOCKET disconnected')
    })

  })
}