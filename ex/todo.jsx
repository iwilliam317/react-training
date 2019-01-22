import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Todo extends Component {
    constructor(props){
        super(props)
    }
    render(){
        // const { list } = this.props.todo
        return (
            <div>
                <h1>Todo</h1>
                <input type='text' /> <button>Add</button>
                {/* <ul>
                    { list.map(todo => {
                        return <li>{todo.description}</li>
                    })}
                </ul> */}
            </div>
        )
    }
}
const mapStateToProps = state => ({ todo: state.todo })
const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch)

export default connect(mapDispatchToProps, mapStateToProps)(Todo)