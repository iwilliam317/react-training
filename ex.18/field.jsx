import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { handleChange } from './fieldActions'

class Field extends Component {
    
    render(){
        return (
            <div>
                <h1>{ this.props.value }</h1>
                <input value={this.props.value} onChange={this.props.handleChange} />
            </div>
        )
    }
}

const mapStateToProps = state => ({ value : state.field.value })
const mapDispatchToProps = dispatch => bindActionCreators({ handleChange }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Field)
