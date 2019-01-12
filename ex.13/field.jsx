import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleChange } from './fieldActions'
import { bindActionCreators } from 'redux'

class Field extends Component {
    render(){
        return (
            <div>
                <h1>{this.props.value}</h1>
                <input onChange={this.props.handleChange} value={this.props.value} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { value: state.field.value }
}

const mapDispatchToProps = dispatch => bindActionCreators({ handleChange}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Field)