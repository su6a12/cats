import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import reducer from './reducer/index'

import {getCatImages} from './reducer/images/actions'

import './index.html'
import './styles/style.css'

// create store
const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

// retrieve cat images and facts
store.dispatch(getCatImages())

const app = (
    <Provider store={store}>
      <App/>
    </Provider>
)

render(app, document.getElementById('cats'))
