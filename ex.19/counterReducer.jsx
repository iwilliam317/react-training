const INITIAL_STATE = { value: 1, step: 1}

const counterReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'STEP_CHANGED':
            return { ...state, step: action.payload }
        
         case 'ADD':
            return { ...state, value: state.value + Number(state.step) }
        
        default:
            return state
    }
}

export default counterReducer