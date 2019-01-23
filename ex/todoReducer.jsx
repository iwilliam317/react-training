const INITIAL_STATE = {
    list: [],
    description: ''
}

const todoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'HANDLE_CHANGE':
        console.log('asdsa')
            return {...state, description: action.payload }
        case 'LIST_TODO':
            return { ...state, list: state.list }
        case 'ADD_TODO':
            const newList = [...state.list]
            newList.push({ description: action.payload })
            return { ...state, list: newList }

        default:
            return state
    }
}

export default todoReducer