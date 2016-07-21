import React, { Component } from 'react'
import * as actionCreators from '../redux/action-creators'
import { connect } from 'react-redux'
import Players from './players.jsx'
import Centre from './centre.jsx'
import UsedWords from './used-words.jsx'
import Nav from './nav.jsx'


class Main extends Component {

  handleSubmit(e) {
    e.preventDefault()
    var word = document.getElementById('game-input').value
    console.log(word)
    if (!this.props.used.includes(word)) {
      this.props.addUsedWord(word)
      this.props.compare(word, this.props.random, this.props.socket.id)
      } else { null }

    document.getElementById('game-input').value = ''
  }

  render() {

    return (
      <div>
      {
        (Object.keys(this.props.players).includes(this.props.socket.id))
        ? <div>
            <Nav reset={ this.props.reset } getRandom={this.props.getRandom }/>
            <div id='main'>
              <Players players={ this.props.players } keys={ Object.keys(this.props.players) } />
              <UsedWords used={ this.props.used } />
              <Centre random={ this.props.random } 
                      players={ this.props.players }/>
            </div>
            <div id='input-div'>
              <form onSubmit={ this.handleSubmit.bind(this) }>
                <input id='game-input' type='text' placeholder='make your guess here'></input>
              </form>
            </div>
          </div>
        : <div>
            <h1>Please sign in with name</h1>
            <a href='/'><button >Return to login</button></a>
          </div>
      }
      </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    players: state.players,
    random: state.random,
    used: state.used
  }
}

export default connect(
  mapStateToProps, 
  actionCreators
  )(Main)