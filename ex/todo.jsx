import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addTodo, listTodo, handleChange } from './todoAction'

class Todo extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { handleChange, description, addTodo } = this.props
        return (
            <div>
                <h1>Todo</h1>
                <input type='text' onChange={handleChange}/> <button onClick={() => addTodo(description)}>Add</button>
            </div>
        )
    }
}
const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ addTodo, listTodo, handleChange }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Todo)