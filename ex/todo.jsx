import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Todo extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <h1>Todo</h1>
                <input type='text' /> <button>Add</button>
            </div>
        )
    }
}
const mapStateToProps = state => ({ todo: state.todo })
const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch)

export default connect(mapDispatchToProps, mapStateToProps)(Todo)