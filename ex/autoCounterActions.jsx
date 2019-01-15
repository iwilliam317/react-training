const add = number => ({
    type: 'ADD',
    payload: number
})

const handleChange = event => ({
    type: 'CHANGE_NUMBER',
    payload: event.target.value
})

export { add, stop, reset, handleChange }