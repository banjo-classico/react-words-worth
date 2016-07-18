import clone from 'clone'

const INITIAL_STATE = {
  word: '',
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
      newState.word = action.word
      break
      
    case 'ADD_PLAYER' :
      newState.players[action.id] = action.player
      break

    case 'REMOVE_PLAYER' :
      delete newState.players[action.id]
      break

    case 'UPDATE_SCORE' :
      newState.players[action.id].score = action.score
      break

    case 'ADD_USED_WORD' :
      newState.used.push(action.used)
      break
  }
  return newState
}