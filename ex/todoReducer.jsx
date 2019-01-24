const INITIAL_STATE = {
    list: [],
    description: ''
}

const todoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'HANDLE_CHANGE':
            return {...state, description: action.payload }

        case 'LIST_TODO':
            return { ...state, list: state.list }

        case 'ADD_TODO':
            const newList = [...state.list]
            const timestamp = new Date().getTime(); 
            newList.push({ _id: timestamp, description: action.payload })
            
            return { ...state, list: newList, description: '' }

        default:
            return state
    }
}

export default todoReducer