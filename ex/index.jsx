import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import {  createStore } from 'redux'

import Todo from './todo'

import reducers from './reducers'

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <Todo />
    </Provider>, document.getElementById('app')
)