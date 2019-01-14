const handleChange = event => {
    console.log('changing')
    return ({
        type: 'CHANGE_VALUE',
        payload: event.target.value
    })
}

export { handleChange }