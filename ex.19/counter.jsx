import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { add, changeStep } from './counterActions'

class Counter extends Component {
    render(){
        return (
            <div>
                <h1>{this.props.counter.value}</h1>
                <input type='number' value={this.props.step} onChange={this.props.changeStep}/>
                <button onClick={this.props.add}>Add</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({ counter: state.counter })
const mapDispatchToProps = dispatch => bindActionCreators({changeStep, add} ,dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)