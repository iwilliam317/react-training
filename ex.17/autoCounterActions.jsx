const add = number => ({
    type: 'ADD',
    payload: number
})

const reset = () => ({
    type: 'RESET'
})

const handleChange = event => ({
    type: 'CHANGE_NUMBER',
    payload: event.target.value
})

export { add, reset, handleChange }