import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {Router, Route, IndexRoute, browserHistory } from 'react-router'
import configureStore from './redux/configure-store'
import App from './app.jsx'
import Login from './components/login.jsx'
import Main from './components/main.jsx'
import io from 'socket.io-client'
import { populateState, removePlayer, updateScore, setRandomWord, getRandom } from './redux/action-creators'

const socket = io()
const store = configureStore(socket)

socket.on('action', (action) => {
  store.dispatch(action)
})

socket.on('populate', () => {
  store.dispatch(populateState(store.getState()))
})

socket.on('remove', (id) => {
  console.log('REMOVE: ', id.slice(2))
  store.dispatch(removePlayer(id.slice(2)))
})

socket.on('update-score', (info) => {
  store.dispatch(updateScore(info, Object.keys(store.getState().players).length))
})

socket.on('random', (random) => {
  store.dispatch(setRandomWord(random))
})

// store.getState().word === '' ? store.dispatch(getRandom()) : null

function createElement(Component, props) {
  return <Component socket={ socket } {...props} />
}

render(
  <Provider store={ store }>
    <Router history={ browserHistory } createElement={ createElement }>
      <Route path='/' component={ App } >
        <IndexRoute component={ Login } ></IndexRoute>
        <Route path='main' component={ Main }></Route>
      </Route>
    </Router>
  </Provider>, document.getElementById('app'))
