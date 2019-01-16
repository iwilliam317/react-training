const INITIAL_STATE = { number: 1, counter: 0}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'CHANGE_NUMBER':
            return {...state, number: action.payload }
        case 'ADD':
            return {...state, counter: state.counter + Number(action.payload) }
        case 'RESET':
            return {...state, counter: 0}
        default:
            return state
    }
}