import api from './services/api'

const getTodos = () => {
    const response = api.get('/todos')
    return {
        type: 'TODO_LISTED',
        payload: response
    }
}

export { getTodos }
