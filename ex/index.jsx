import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import Counter from './counter'

import counterReducer from './counterReducer'

const reducers = combineReducers({ 
    counter: counterReducer
})

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <Counter />
    </Provider>, document.getElementById('app'))