import clone from 'clone'

const INITIAL_STATE = {
  random: '',
  used: [],
  players: {}
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
      newState.players[action.id].score += action.score
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
  }
  return newState
}