import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {Router, Route, IndexRoute, hashHistory } from 'react-router'
import configureStore from './redux/configure-store'
import App from './app.jsx'
import Login from './components/login.jsx'
import Game from './components/main.jsx'
import io from 'socket.io-client'
import { populateState, removePlayer } from './redux/action-creators'

const socket = io()
const store = configureStore(socket)

socket.on('action', (action) => {
  store.dispatch(action)
})

socket.on('populate', () => {
  store.dispatch({type: 'POPULATE_STATE',
                  socket: true,
                  state: store.getState()})
})

socket.on('remove', (id) => {
  console.log('REMOVE: ', id.slice(2))
  store.dispatch(removePlayer(id.slice(2)))
})

function createElement(Component, props) {
  return <Component socket={ socket } {...props} />
}

render(
  <Provider store={ store }>
    <Router history={ hashHistory } createElement={ createElement }>
      <Route path='/' component={ App } >
        <IndexRoute component={ Login } ></IndexRoute>
        <Route path='/main' component={ Game }></Route>
      </Route>
    </Router>
  </Provider>, document.getElementById('app'))
