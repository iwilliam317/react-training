const INITIAL_STATE = { value: 1 }
export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case 'INCREASE':
            return { value: state.value + 1}
        default:
            return state
    }
}