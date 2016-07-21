import React, { Component } from 'react'

class Nav extends Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.props.reset()
    this.props.getRandom()
  }

  toggleHowTo() {
    this.props.toggleHowTo()
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div id='nav'>
            <h3 className='nav-title' >Word's Worth</h3>
            <div>
              <button className='howto-btn' onMouseEnter={ this.toggleHowTo.bind(this) } onMouseLeave={ this.toggleHowTo.bind(this)}>How to play</button>
              <button className='new-game-btn' onClick={ this.handleClick.bind(this) }>New Game</button>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default Nav