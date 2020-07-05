import React, { useState, useReducer } from 'react'

const ACTIONS = {
    ADD_TODO: 'add-todo'    
}

function redutor(tarefas, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...tarefas, newTodo(action.payload.name)]
    
        default:
            break;
    }
}

function newTodo(name) {
    return {
        id: Date.now(),
        name: name,
        complete: false
    }
}

function App() {
    const [tarefas, despacho] = useReducer(redutor, [])
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        despacho({ type: ACTIONS.ADD_TODO, payload: { name: name }})
        setName('')
    }

    console.log(tarefas)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input  type='text' value={name} onChange={e => setName(e.target.value)} />
            </form>
        </>
    )
}

export default App
