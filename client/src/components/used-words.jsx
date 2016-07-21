import React, { Component } from 'react'

class UsedWords extends Component {
  
  render() {
    return (
      <div id='used-box'>
        <h1>Used Words</h1>
        <div>
          {
            this.props.used.map((word) => {
              return <p>{word}</p>
            })
          }
        </div>
      </div>
      )
  }
}

export default UsedWords