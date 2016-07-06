import React, { Component } from 'react'
import Players from './players.jsx'
import Centre from './centre.jsx'
import UsedWords from './used-words.jsx'

const word = 'beachball'
const used = ['animal', 'hamburger', 'perfunctory']
const players = {1: {name: 'Bob', score: 0}, 2: {name: 'Linda', score: 0}}

class Main extends Component {
  render() {
    return (
      <div id='main'>
        <Players players={ players } keys={ Object.keys(players) } />
        <Centre word={ word } />
        <UsedWords used={ used } />
      </div>
      )
  }
}

export default Main