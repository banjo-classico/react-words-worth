import clone from 'clone'

const INITIAL_STATE = {
  random: '',
  used: [],
  players: {},
  howto: false
}

export default function reducer (state=INITIAL_STATE, action) {
  let newState = clone(state)

  switch(action.type) {
    case 'POPULATE_STATE' :
      newState = action.state
      break
    case 'SET_RANDOM_WORD' :
      newState.random = action.word
      break

    case 'GET_RANDOM' :
      break
      
    case 'ADD_PLAYER' :
      newState.players[action.id] = action.player
      break

    case 'REMOVE_PLAYER' :
      delete newState.players[action.id]
      break

    case 'UPDATE_SCORE' :
      var multiplier = 1
      action.players > 2 ? multiplier = 2 : null
      action.players > 4 ? multiplier = 3 : null
      newState.players[action.id].score += action.score*multiplier
      break

    case 'ADD_USED_WORD' :
      newState.used.push(action.used)
      break

    case 'RESET_GAME' :
      Object.keys(newState.players).map((key) => {
        return newState.players[key].score = 0
      })
      newState.used = []
      break

    case 'TOGGLE_HOWTO' :
      newState.howto = !newState.howto
      break
  }
  return newState
}