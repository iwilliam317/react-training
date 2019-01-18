const INITIAL_STATE = { value: 'Default state'}
const fieldReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'CHANGE_VALUE':
            return { ...state, value: action.payload }
        default:
            return state
    }
}

export default fieldReducer 