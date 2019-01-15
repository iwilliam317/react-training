import React, { Component } from 'react'
import { handleChange, add, reset } from './autoCounterActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class AutoCounter extends Component {

    start(){       
        setInterval(() => this.props.add(this.props.autoCounter.number), 1000)
    }

    render(){
        return (
            <div>
                <h1>{ this.props.autoCounter.counter }</h1>
                <input type='number' value={ this.props.autoCounter.number } onChange={this.props.handleChange}/>
                <button onClick={this.start.bind(this)}>Start</button>
                <button onClick={this.props.reset}>Reset</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({ autoCounter: state.autoCounter })
const mapDispatchToProps = dispatch => bindActionCreators({ handleChange, add, reset }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AutoCounter)