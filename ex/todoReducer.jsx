const INITIAL_STATE = { count: 0, list: [] }
const todoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'TODO_LISTED':
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}
export default todoReducer