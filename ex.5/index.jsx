import React from 'react'
import ReactDOM from 'react-dom'

import Family from './Family'
import Member from './Member'

ReactDOM.render(
    <Family lastName='Scaletta'>
        <Member name='Vito'/>
        <Member name='Joe'/>
        <Member name='Giulia'/>        
    </Family>
    , document.getElementById('app'));