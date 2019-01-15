const INITIAL_STATE = { value: 1, step: 1 }
export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case 'INCREASE':
            return {...state, value: state.value + state.step }
        case 'DECREASE':
            return {...state, value: state.value - state.step }
        case 'ADD_STEP':
            return {...state, step: Number(action.payload) }
        default:
            return state
    }
}