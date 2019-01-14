import React from 'react'
import { increase } from './counterActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Counter = props => {
    return (
        <div>
            <h1>{props.value}</h1>
            <button onClick={props.increase} >Increase</button>
        </div>
    )
}

const mapStateToProps = state => ({ value: state.counter.value })
const mapDispatchToProps = dispatch => bindActionCreators({ increase }, dispatch)

export default connect(mapStateToProps ,mapDispatchToProps)(Counter)