import React, { Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = { name: '' }       
    }

    handleSubmit(event){
        alert(`A name was submitted: ${this.state.name}`);
        event.preventDefault();
    }
    handleChange(event){
        this.setState({ name: event.target.value })
    }
    render(){
        return (
            <div>
                <form onSubmit={ this.handleSubmit.bind(this) }>
                    <label>Name: </label>
                    <input onChange={ this.handleChange.bind(this) }/>
                    <button type='submit'>Send</button>
                </form>
                { this.state.name}       
            </div>
        )

    }
}

export default Form