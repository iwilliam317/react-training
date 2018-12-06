import React from 'react'

export default props => (
    <div>
        <h1>Family {props.lastName}</h1>
        {props.children}
        {React.cloneElement(props.children, {...props})}
    </div>

)