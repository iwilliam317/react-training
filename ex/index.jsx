import React from 'react'
import ReactDOM from 'react-dom'

import Todo from './todo'

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import todoReducer from './todoReducer'

const reducers = combineReducers({
    todo: todoReducer
})

const store = createStore(reducers)


ReactDOM.render(
    <Provider store={store}>
        <Todo />
    </Provider>, document.getElementById('app'))