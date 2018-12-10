import React from 'react'

const childrenAttributes = (children, props) => {
    return React.Children.map(props.children, children => 
        React.cloneElement(children, {...props})
   )
}

export { childrenAttributes }