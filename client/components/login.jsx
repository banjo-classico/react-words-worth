import React, { Component } from 'react'
import * as actionCreators from '../redux/action-creators'
import { connect } from 'react-redux'

class Login extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(e) {
    e.preventDefault()
    let name = document.getElementById('namebox').value
    let id = Object.keys(this.props.players).length + 1
    this.props.addPlayer(id, {name, score: 0})
    name = ''
    this.context.router.push('/main')

  }

  render() {
    return (
      <div>
        <h1>Word's Worth</h1>
        <img src='../images/penguin.png'/>
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <input id='namebox' type='text' placeholder='Enter player name' ></input>
        </form>
      </div>
      )
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    players: state.players
  }
}

export default connect(
  mapStateToProps, 
  actionCreators
  )(Login)