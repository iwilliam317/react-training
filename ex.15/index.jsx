import React from 'react'
import ReactDOM from 'react-dom'

import Counter from './counter'

import counterReducer from './counterReducer'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const reducers = combineReducers({
    counter: counterReducer 
})

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <Counter />
    </Provider>, document.getElementById('app'))