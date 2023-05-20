import React, { useState, useContext } from 'react';
import TodoContext from '../context/todo-context';


const TodoInput = () => {
    const [todo, setTodo] = useState("")
    //Peut-on accéder directement a cette valeur depuis le provinder props.addTodo ?
    const {addTodo} = useContext(TodoContext)

    const onChangeHandler = (e) => {
        setTodo(e.target.value)
    }

    const onSubmiHandler = (e) => {
        // e.prevenDefault()
        const newTodo = {
            id:Math.random(),
            text: todo,
            complete: false
        }
        addTodo(newTodo)
        setTodo('')
    }

    return (
        <div>
            <h3>
                UseContext and UseReducer TODO-LIST
            </h3>
            <form onSubmit={onSubmiHandler} className="">
                <input 
                    className='' 
                    type="text"
                    value={todo}
                    placeholder="Enter a Todo"
                    onChange={onChangeHandler}
                />
                <button className='' type='submit'>ADD</button>
            </form>
        </div>
    )
}

export default TodoInput;