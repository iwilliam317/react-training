import React from 'react'
import ReactDOM from 'react-dom'

import Counter from './counter'

ReactDOM.render(
    <Counter initialValue={10} />
    , document.getElementById('app'));