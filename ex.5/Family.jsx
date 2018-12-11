import React from 'react'
import { childrenAttributes } from '../utils'

export default props => (
    <div>
        <h1>Family {props.lastName}</h1>
        
        { childrenAttributes(props.children, props) }
    </div>

)