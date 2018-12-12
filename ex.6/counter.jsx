import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props);
        this.state  = {
            value: props.initialValue
        }
    }

    sum(delta){
        this.setState({value : this.state.value + delta})
    }


    render(){
        return (
            <div>
                <h1>{this.state.value}</h1>
                <button onClick={()=> this.sum(1)}> Add</button>
                <button onClick={()=> this.sum(-1)}> Dec</button>
            </div>
            
        )
    }
}

export default Counter