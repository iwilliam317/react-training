import React, { Component } from 'react'

class AutoCounter extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: props.value
        }
    }
    componentDidMount(){
        this.load()
    }
    load(){
        setInterval(() => this.sum(), 1000)
    }
    sum(){
         this.setState({ value : this.state.value + 1})
    }
    render(){
        return (
            <div>
                <h1>{this.state.value}</h1>
            </div>
        )
    }
}

export default AutoCounter