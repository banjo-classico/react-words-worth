import { compare, buildTerms } from './apis'

export default (io) => {
  io.on('connection', (socket) => {

    console.log('connection made')

    const random = 'animal'    

    socket.broadcast.emit('populate')

    socket.on('action', (action) => {
      action.socket = false
      switch (action.type) {
        case 'COMPARE_TERMS' :
          var terms = buildTerms(random, action.word)
          compare(terms, (err, res) => {
            io.emit('update-score', {id: action.id, score: Math.floor(res.weightedScoring)})
          })
          break

        default :
          socket.broadcast.emit('action', action)
          break
      }
    })

    socket.on('disconnect', () => {
      console.log('SOCKET disconnected')
      socket.broadcast.emit('remove', socket.id)
    })

  })
}