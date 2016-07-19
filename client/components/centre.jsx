import React, { Component } from 'react'

class Centre extends Component {

  handleSubmit(e) {
    e.preventDefault()
    var word = document.getElementById('game-input').value
    console.log(word)
    this.props.addUsedWord(word)
    document.getElementById('game-input').value = ''
  }

  render() {
    return (
      <div>
        <div><h1>{ this.props.word }</h1></div>
        <div>Graph</div>
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <input id='game-input' type='text' placeholder='put a word here'></input>
        </form>
      </div>
      )
  }
}

export default Centre