export function setRandomWord(word) {
  return {
    type: 'SET_RANDOM_WORD',
    socket: true,
    word
  }
}

export function addPlayer(id, player) {
  return {
    type: 'ADD_PLAYER',
    socket: true,
    id,
    player
  }
}

export function removePlayer(id) {
  return {
    type: 'REMOVE_PLAYER',
    socket: true,
    id
  }
}

export function updateScore(id, score) {
  return {
    type: 'UPDATE_SCORE',
    socket: true,
    id, 
    score
  }
}

export function addUsedWord(used) {
  return {
    type: 'ADD_USED_WORD',
    socket: true,
    used
  }
}

export function populateState(state) {
  return {
    type: 'POPULATE_STATE',
    socket: true,
    state
  }
}
