const changeStep = event => ({
    type: 'STEP_CHANGED',
    payload: event.target.value
})

const add = () => ({
    type: 'ADD'
})

export { add, changeStep }