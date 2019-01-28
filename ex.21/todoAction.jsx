const addTodo = description => ({
    type: 'ADD_TODO',
    payload: description
})

const listTodo = () => ({
    type: 'LIST_TODO'
})

const handleChange = event => ({
    type:'HANDLE_CHANGE',
    payload: event.target.value
})

export { addTodo, listTodo, handleChange }