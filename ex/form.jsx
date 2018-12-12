import React, { Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = { name: '' }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
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
                <form onSubmit={ this.handleSubmit }>
                    <label>Name: </label>
                    <input onChange={ this.handleChange }/>
                    <button type='submit'>Send</button>
                </form>
                                
            </div>
        )

    }
}

export default Form