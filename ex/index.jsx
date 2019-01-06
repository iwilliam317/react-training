import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import Field  from './field'

const reducers = combineReducers({
    field: () => ({ value: 'Redux'})
})

const store = createStore(reducers)
ReactDOM.render(
    <Provider store={store}>
        <Field  />    
    </Provider>
    , document.getElementById('app'))