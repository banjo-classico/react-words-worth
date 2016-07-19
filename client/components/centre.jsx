import React, { Component } from 'react'
import Chart from './chart.jsx'
//import Graph from './graph.jsx'

class Centre extends Component {

  handleSubmit(e) {
    e.preventDefault()
    var word = document.getElementById('game-input').value
    console.log(word)
    if (!this.props.used.includes(word)) {
      this.props.addUsedWord(word)
      this.props.compare(word, this.props.random, this.props.id)
      } else { null }

    document.getElementById('game-input').value = ''
  }

  render() {
    return (
      <div>
        <div><h1>{ this.props.random }</h1></div>
        <Chart players={ this.props.players }/>
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <input id='game-input' type='text' placeholder='put a word here'></input>
        </form>
      </div>
      )
  }
}

export default Centre