import React, { useContext } from 'react'
import todoContext from '../context/todo-context'
import TodoItem from './TodoItem'

const TodoList = () =>{
    const {todos, toggleTodo, deleteTodo} = useContext(todoContext)

    return (
        <div className=''>
            <h3>TO DO LIST</h3>
            <div className=''>
                {todos.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        text={todos.text}
                        complete={todo.complete}
                        clickToToggle={() => toggleTodo(todo.id)}
                        clickToDelete={() => deleteTodo(todo.id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default TodoList