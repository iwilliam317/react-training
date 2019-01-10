export function handleChange(event){
    console.log('handle change')
    return {
        type: 'CHANGE_VALUE',
        payload: event.target.value
    }
}