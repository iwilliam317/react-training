import React from 'react'
import { increase, decrease, addStep } from './counterActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Counter = props => {
    return (
        <div>
            <h1>{props.counter.value}</h1>
            <input type='number' value={props.counter.step} onChange={props.addStep}/>
            <button onClick={props.increase} >Increase</button>
            <button onClick={props.decrease} >Decrease</button>
        </div>
    )
}

const mapStateToProps = state => ({ counter: state.counter })
const mapDispatchToProps = dispatch => bindActionCreators({ increase, decrease, addStep }, dispatch)

export default connect(mapStateToProps ,mapDispatchToProps)(Counter)