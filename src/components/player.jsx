import React, { Component } from 'react'

class Player extends Component {
  render() {
    return (
      <div>
        <h4>{ this.props.player.name }</h4>
        <h4>{ this.props.player.score }</h4>
      </div>
      )
  }
}

export default Player