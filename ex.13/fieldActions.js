const handleChange = event => {
    return { 
        type: 'CHANGE_VALUE',
        payload: event.target.value
    }
}

export { handleChange }