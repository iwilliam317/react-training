import React, { Component } from 'react'
import { getTodos } from './todoAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Todo extends Component {
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.getTodos()
    }
    render(){
        return (
            <div>
                <h1>List of to-dos</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({ todo: state.todo })
const mapDispatchToProps = dispatch => bindActionCreators({ getTodos }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Todo)