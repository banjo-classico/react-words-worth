import React, { Component } from 'react'
import * as actionCreators from '../redux/action-creators'
import { connect } from 'react-redux'
import Players from './players.jsx'
import Centre from './centre.jsx'
import UsedWords from './used-words.jsx'
import Nav from './nav.jsx'


class Main extends Component {

  render() {
    return (
      <div>
      {
        (Object.keys(this.props.players).includes(this.props.socket.id))
        ? <div>
            <Nav reset={ this.props.reset } getRandom={this.props.getRandom }/>
            <div id='main'>
              <Players players={ this.props.players } keys={ Object.keys(this.props.players) } />
              <Centre word={ this.props.word } 
                      addUsedWord={ this.props.addUsedWord } 
                      compare={ this.props.compare }
                      used={ this.props.used }
                      id={ this.props.socket.id }/>
              <UsedWords used={ this.props.used } />
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
    word: state.word,
    used: state.used
  }
}

export default connect(
  mapStateToProps, 
  actionCreators
  )(Main)