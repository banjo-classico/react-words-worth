import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div id='nav'>
            <h3>Word's Worth</h3>
            <button>New Game</button>
          </div>
        </div>
      </div>
      )
  }
}

export default Nav