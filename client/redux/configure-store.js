import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'

export default function configureStore(socket) {
  return createStore(reducer, applyMiddleware(customSocketMiddleware(socket)))
}

const customSocketMiddleware = socket => store => next => action => {
  socket.emit('action', action)
  return next(action)
}