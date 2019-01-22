import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'

import reducers from './reducers'

const store = createStore(reducers)
ReactDOM.render(
    <Provider store={store}>
        <Todo />
    </Provider>, document.getElementById('app')
)