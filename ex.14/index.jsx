import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import Field from './field'
import fieldReducer from './fieldReducer'

const reducers = combineReducers({
    field : fieldReducer
})

const store = createStore(reducers)


ReactDOM.render(
    <Provider store={store}>
        <Field />
    </Provider>
    , document.getElementById('app'))