import React from 'react'
import ReactDOM from 'react-dom'

import Todo from './todo'

import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import todoReducer from './todoReducer'

import promise from 'redux-promise'


const reducers = combineReducers({
    todo: todoReducer
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise)(createStore)(reducers, devTools)


ReactDOM.render(
    <Provider store={store}>
        <Todo />
    </Provider>, document.getElementById('app'))