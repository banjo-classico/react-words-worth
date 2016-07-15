import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {Router, Route, IndexRoute, hashHistory } from 'react-router'
import configureStore from './redux/configure-store'
import App from './app.jsx'
import Login from './components/login.jsx'
import Game from './components/main.jsx'
import io from 'socket.io-client'
import { populateState } from './redux/action-creators'

const socket = io()
const store = configureStore(socket)

socket.on('action', (action) => {
  store.dispatch(action)
})

socket.on('populate', () => {
  store.dispatch(populateState(store.getState()))
})

render(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path='/' component={ App } >
        <IndexRoute component={ Login } ></IndexRoute>
        <Route path='/main' component={ Game }></Route>
      </Route>
    </Router>
  </Provider>, document.getElementById('app'))