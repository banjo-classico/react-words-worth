import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'

export default function configureStore(socket) {
  return createStore(reducer, 
                    compose(applyMiddleware(customSocketMiddleware(socket)), 
                      window.devToolsExtension ? window.devToolsExtension() : f => f))
}

const customSocketMiddleware = socket => store => next => action => {
  if (action.socket) {
    socket.emit('action', action)
  }
  return next(action)
}