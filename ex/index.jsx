import React from 'react'
import ReactDOM from 'react-dom'

import Default, {First, Second} from './Components'

ReactDOM.render(
    <div>
        <First />
        <Second />
        <Default />
    </div>
    , document.getElementById('app'));