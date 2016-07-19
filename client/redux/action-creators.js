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
    id
  }
}

export function updateScore(info) {
  return {
    type: 'UPDATE_SCORE',
    socket: false,
    id: info.id, 
    score: info.score
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

export function compare(word, id) {
  return {
    type: 'COMPARE_TERMS',
    socket: true,
    word,
    id
  }
}
