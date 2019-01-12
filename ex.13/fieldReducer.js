const INITIAL_STATE = { value: 'Message from Redux'}

export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case 'CHANGE_VALUE':
            return { value : action.payload }
        default:
            return state
    }
}