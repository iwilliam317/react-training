import React from 'react'
import { connect } from 'react-redux'

const todoList = props => (
    <ol>
        { props.list.map(todo => {
            return <li key={todo._id}>{ todo.description }</li>
        })}
    </ol>
)

const mapStateToProps = state => ({ list: state.todo.list })

export default connect(mapStateToProps)(todoList)