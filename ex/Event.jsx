import React, { Component } from 'react'

class Event extends Component {
    constructor(props){
        super(props)
        this.state = { value: props.initialValue }
        this.handleChange = this.handleChange.bind(this)
    }

    sum(delta){
        this.setState({ value : this.state.value + delta })
    }

    componentDidMount(){
        this.autoLoad()
    }

    autoLoad(){
        setInterval(() => this.sum(1), 1000)
    }

    handleChange(event){
        this.setState( { name: event.target.value })
    }
    render(){
        return(
            <div>
                <h1>{ this.state.value }</h1>
                <input onChange={this.handleChange} type="text"/><br/>   
                { this.state.name }            
            </div>
        )
    }
}

export default Event