import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addTodo, handleChange } from './todoAction'
import TodoList from './todoList'

class Todo extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { handleChange, description, addTodo } = this.props
        return (
            <div>
                <h1>Todo</h1>
                <input type='text' onChange={handleChange} value={description}/> <button onClick={() => addTodo(description)} disabled={this.props.description == ''}>Add</button>
                <TodoList />
            </div>
        )
    }
}
const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ addTodo, handleChange }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Todo)