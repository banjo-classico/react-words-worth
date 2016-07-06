import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/configure-store'
import App from './app'

render(<App />, document.getElementById('app'))