import React, { Component } from 'react'

class Player extends Component {

  render() {

    return (
      <div id='player'>
        <p id='score'>{ this.props.player.score }</p>
        <p id='name'>{ this.props.player.name }</p>
      </div>
      )
  }
}

export default Player