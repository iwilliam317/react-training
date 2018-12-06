import React from 'react'

export default props => (
    <div>
        <h1>Family {props.lastName}</h1>
        
        { React.Children.map(props.children, children => 
             React.cloneElement(children, {...props})
        ) }
    </div>

)