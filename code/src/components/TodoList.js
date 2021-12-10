import React from "react"
import { useSelector, useDispatch } from "react-redux"

import todos from "../reducers/todos"

const TodoList = () => {
    const items = useSelector((store) => store.todos.items)

    const dispatch = useDispatch()

    const onToggleTodo = (id) => {
        dispatch(todos.actions.toggleTodo(id))
    }

    const onDeleteTodo = (id) => {
        dispatch(todos.actions.deleteTodo(id))
    }

    return (
        <section>
            {items.map(item => (
                <div className="flex-item" key={item.id}>
                    <input
                        type="checkbox"
                        checked={item.isComplete}
                        onChange={() => onToggleTodo(item.id)}
                    />
                    <p>{item.text}</p>
                    <button onClick={() => onDeleteTodo(item.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </section>
    )
}

export default TodoList