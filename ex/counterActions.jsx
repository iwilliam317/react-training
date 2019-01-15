const increase = () => ({
        type: 'INCREASE'
})

const decrease = () => ({
        type: 'DECREASE'
})

const addStep = (event) => ({
        type: 'ADD_STEP',
        payload: event.target.value
})

export { increase, decrease, addStep }