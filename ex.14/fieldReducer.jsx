const INITIAL_STATE = { value:  'Default from redux' }

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'CHANGE_VALUE':
            return { value: action.payload }
        default:
            return state
    }
}