export function setRandomWord(word) {
  return {
    type: 'SET_RANDOM_WORD',
    socket: false,
    word
  }
}

export function getRandom() {
  return {
    type: 'GET_RANDOM',
    socket: true
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

export function compare(word, random, id) {
  return {
    type: 'COMPARE_TERMS',
    socket: true,
    word,
    random,
    id
  }
}

export function reset() {
  return {
    type: 'RESET_GAME',
    socket: true
  }
}

