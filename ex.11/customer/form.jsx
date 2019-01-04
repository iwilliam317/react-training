import React from 'react'

const Form = props => (
    <div>
        <h1>Form</h1>
        <label>Name</label>
        <input onChange={props.handleChange} name='name' value={props.name}/>
        <label>Age</label>
        <input onChange={props.handleChange} name='age' value={props.age}/>
        <button onClick={props.handleSubmit}>Save</button>
    </div>
)

export default Form