import React, { Component } from 'react'

class Centre extends Component {
  render() {
    return (
      <div>
        <div><h1>{ this.props.word }</h1></div>
        <div>Graph</div>
        <input type='text' placeholder='put a word here'></input>
      </div>
      )
  }
}

export default Centre