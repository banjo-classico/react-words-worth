import React, { Component } from 'react'

class Winner extends Component {

  handleClick() {
    this.props.reset()
    this.props.getRandom()
  }

  render() {
    return (
      <div id='winnerbox'>
        <div id='winner'>
          <p>{ this.props.name } wins!!!</p>
          <button className='new-game-btn' onClick={ this.handleClick.bind(this) }>New Game</button>
        </div>
      </div>
      )
  }
}

export default Winner