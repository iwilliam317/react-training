import React, { Component } from 'react'

class AutoCounter extends Component {

    constructor(props){
        super(props)
        this.state = { number: 1, counter: 0 }

        this.add = this.add.bind(this)
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.reset = this.reset.bind(this)
    }

    handleChange(event){
        this.setState({...this.state, number: event.target.value })
    }

    start(){       
        const active = setInterval(() => this.add(this.state.number), 1000)
        this.setState({ ...this.state, active })
    }

    add(n){        
        this.setState({...this.state, counter: this.state.counter + Number(n)})
    }

    stop(){
        clearInterval(this.state.active)
    }

    reset(){
        this.setState({...this.state, counter: 0})
    }
    render(){
        return (
            <div>
                <h1>{ this.state.counter }</h1>
                <input type='number' value={ this.state.number } onChange={this.handleChange.bind(this)}/>
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default AutoCounter