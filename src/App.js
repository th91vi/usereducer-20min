import React, { useState, useReducer } from 'react'
import Tarefa from './Tarefa.js'

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'    
}

function redutor(tarefas, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...tarefas, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return tarefas.map(tarefa => {
                if (tarefa.id === action.payload.id) {
                    return { ...tarefa, complete: !tarefa.complete }
                }
                return tarefa
            })
        case ACTIONS.DELETE_TODO:
            return tarefas.filter(tarefa => tarefa.id !== action.payload.id)
        default:
            return tarefas
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
            {tarefas.map(tarefa => {
                return <Tarefa key={tarefa.id} tarefa={tarefa} despacho={despacho} />
            })}
        </>
    )
}

export default App
