const handleChange = event => ({
    type: 'CHANGE_VALUE',
    payload: event.target.value
})

export { handleChange }