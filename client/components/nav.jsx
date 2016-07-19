import React, { Component } from 'react'

class Nav extends Component {

  handleClick() {
    this.props.reset()
    this.props.getRandom()
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div id='nav'>
            <h3>Word's Worth</h3>
            <button onClick={ this.handleClick.bind(this) }>New Game</button>
          </div>
        </div>
      </div>
      )
  }
}

export default Nav