const INITIAL_STATE = { number: 1, counter: 0}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'CHANGE_NUMBER':
            return {...state, number: action.payload }
        case 'ADD':
            console.log(action.payload)
            return {...state, counter: state.counter + Number(action.payload) }
        default:
            return state
    }
}