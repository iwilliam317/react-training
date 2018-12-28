import React, { Component } from 'react'
import Form from './form'

export default class Customer extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            age: ''
        }
    }

    handleChange(event){
        this.setState({ [event.target.name] : event.target.value})
    }

    handleSubmit(event){
        const { name, age } = this.state
        this.clearInput()
        console.log(`Saving...${name} - ${age}`)
    }

    clearInput(){
        this.setState({ name: '', age: '' })
    }
    render(){
        return(
            <div>
                <Form 
                    handleChange={this.handleChange.bind(this)}
                    handleSubmit={this.handleSubmit.bind(this)}
                    name={this.state.name}
                    age={this.state.age} />
            </div>
        )
    }
}