import React, { Component } from 'react'
import Nav from './components/nav.jsx'
import Main from './components/main.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Main />
      </div>
      )
  }
}

export default App