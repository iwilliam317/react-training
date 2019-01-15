import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import AutoCounter from './autoCounter'
import autoCounterReducer from './autoCounterReducer'

const reducers = combineReducers({
    autoCounter: autoCounterReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <AutoCounter />
    </Provider>, document.getElementById('app'))