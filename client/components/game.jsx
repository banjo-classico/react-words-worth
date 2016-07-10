import React, { Component } from 'react'
import * as actionCreators from '../redux/action-creators'
import { connect } from 'react-redux'
import Nav from './nav.jsx'
import Main from './main.jsx'

class Game extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Main />
      </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    players: state.players,
    word: state.word,
    used: state.used
  }
}

export default connect(
  mapStateToProps, 
  actionCreators
  )(Game)