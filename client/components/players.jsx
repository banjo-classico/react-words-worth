import React, { Component } from 'react'
import Player from './player.jsx'

class Players extends Component {
  render() {
    return (
      <div>
        <h1>Players</h1>
        {
          this.props.keys.map((key) => {
            return <Player player={ this.props.players[key] } />
          })
        }
      </div>
      )
  }
}

export default Players