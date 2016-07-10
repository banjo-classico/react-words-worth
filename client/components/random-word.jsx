import React, { Component } from 'react'

class RandomWord extends Component {
  render() {
    return (
      <div>
        <h1>{ this.props.word }</h1>
      </div>
      )
  }
}

export default RandomWord