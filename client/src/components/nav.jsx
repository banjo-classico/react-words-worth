import React, { Component } from 'react'
import HowTo from './howto.jsx'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {howto: false}
  }

  handleClick() {
    this.props.reset()
    this.props.getRandom()
  }

  toggleHowTo() {
    this.setState({howto: !this.state.howto})
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div id='nav'>
            <h3 className='nav-title'>Word's Worth</h3>
            <div>
              <button className='howto-btn' onMouseEnter={ this.toggleHowTo.bind(this) } onMouseLeave={ this.toggleHowTo.bind(this)}>How to play</button>
              <button className='new-game-btn' onClick={ this.handleClick.bind(this) }>New Game</button>
            </div>
          </div>
        </div>
        {
        this.state.howto ? <HowTo /> : null
        }
      </div>
      )
  }
}

export default Nav