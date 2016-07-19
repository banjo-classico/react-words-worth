import { compare, buildTerms, getRandomWord } from './apis'

export default (io) => {
  io.on('connection', (socket) => {

    console.log('connection made')

    socket.broadcast.emit('populate')

    socket.on('action', (action) => {
      action.socket = false
      switch (action.type) {
        case 'COMPARE_TERMS' :
          var terms = buildTerms(action.random, action.word)
          compare(terms, (err, res) => {
            io.emit('update-score', {id: action.id, score: Math.floor(res.weightedScoring)})
          })
          break

        case 'GET_RANDOM' :
          getRandomWord(function(err, res) {
            var random = res.word
            io.emit('random', res.word)
          })

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