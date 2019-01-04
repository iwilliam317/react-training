import React, { Component } from 'react'

class Field extends Component {
    
    constructor(props){
        super(props)
        this.state = { value: 'test' }
    }

    handleChange(event){
        this.setState({ value : event.target.value})
    }

    render(){
        return(
            <div>
                <h1>{ this.state.value }</h1>
                <input type='text' onChange={this.handleChange.bind(this)} value={this.state.value} />
            </div>
        )
    }
}

export default Field