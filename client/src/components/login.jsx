import React, { Component } from 'react'
import * as actionCreators from '../redux/action-creators'
import { connect } from 'react-redux'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {color: 'black'}
  }

  handleSubmit(e) {
    e.preventDefault()
    let name = document.getElementById('namebox').value
    let id = Object.keys(this.props.players).length + 1
    this.props.addPlayer(this.props.socket.id, {name, score: 0})
    console.log(this.props)
    this.context.router.push('/main')
  }

  toggleColor() {
    var color
    if (this.state.color === 'black') {
      color = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')'
      this.setState({color})
    } else {
      this.setState({color: 'black'})
    }

  }

  render() {
    return (
      <div className='login'>
        <h1 id='title' 
            onMouseEnter={this.toggleColor.bind(this)} 
            onMouseLeave={this.toggleColor.bind(this)} 
            style={{color: this.state.color}}>Word's Worth</h1>
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