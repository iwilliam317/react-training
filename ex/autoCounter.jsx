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
        let { value } = this.state;
        value++;
        this.setState({ value })
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