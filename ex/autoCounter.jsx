import React, { Component } from 'react'
import { handleChange, add } from './autoCounterActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class AutoCounter extends Component {


    start(){       
        setInterval(() => this.props.add(this.props.autoCounter.number), 1000)
    }

    // stop(){
    //     clearInterval(this.state.active)
    // }

    // reset(){
    //     this.setState({...this.state, counter: 0})
    // }
    render(){
        return (
            <div>
                <h1>{ this.props.autoCounter.counter }</h1>
                <input type='number' value={ this.props.autoCounter.number } onChange={this.props.handleChange}/>
                {/* <button onClick={() => this.props.add(2) }>ADD</button> */}
                <button onClick={this.start.bind(this)}>Start</button>
                <button >Stop</button>
                <button >Reset</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({ autoCounter: state.autoCounter })
const mapDispatchToProps = dispatch => bindActionCreators({ handleChange, add }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AutoCounter)