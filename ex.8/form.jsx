import React, { Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = { }       
    }

    handleSubmit(event){
        alert(`Information submitted: ${this.state.name} ${this.state.age}`);
        event.preventDefault();
    }
    handleChange(event){
        this.setState({ [event.target.name]: event.target.value })
    }
    render(){
        return (
            <div>
                <form onSubmit={ this.handleSubmit.bind(this) }>
                    <label>Name: </label>
                    <input name='name' onChange={ this.handleChange.bind(this) }/>
                    <label>Age</label>
                    <input type='number' name='age' onChange={ this.handleChange.bind(this) } />
                    <button type='submit'>Send</button>
                </form>      
            </div>
        )

    }
}

export default Form