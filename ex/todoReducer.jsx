const INITIAL_STATE = { 
    list: [
        { 
            description: 'study'
        }, 
        {
            description: 'wash dishes'
        }
    ]
}

const todoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_TODO':
            const newTodo = action.payload
            return { ...state, list: state.list.push(newTodo) }

        default:
            return state
    }
}

export default todoReducer