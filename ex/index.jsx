import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import {  createStore } from 'redux'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

import Todo from './todo'

import reducers from './reducers'

const store = createStore(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <Todo />
    </Provider>, document.getElementById('app')
)