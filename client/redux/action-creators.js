export function setRandomWord(word) {
  return {
    type: 'SET_RANDOM_WORD',
    word
  }
}

export function addPlayer(id, player) {
  return {
    type: 'ADD_PLAYER',
    id,
    player
  }
}

export function updateScore(id, score) {
  return {
    type: 'UPDATE_SCORE',
    id, 
    score
  }
}

export function addUsedWord(used) {
  return {
    type: 'ADD_USED_WORD',
    used
  }
}
