import React from 'react'
import { ACTIONS } from './App.js'

export default function Tarefas( { tarefa, despacho } ) {
    return (
        <div>
            <span style={{ color: tarefa.complete ? '#aaa' : '#000'}}>
                {tarefa.name}
            </span>
            <button onClick={() => despacho({
                type: ACTIONS.TOGGLE_TODO,
                payload: {
                    id: tarefa.id
                }
            })}>Completa</button>
            <button onClick={() => despacho({
                type: ACTIONS.DELETE_TODO,
                payload: {
                    id: tarefa.id
                }
            })}>Apagar</button>
        </div>
    )
}
