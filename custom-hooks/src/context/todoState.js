import React, { useReducer } from 'react';
import todoContext from './todo-context';
import todoReducer from './todo-reducer';
import {ADD_TODO, TOGGLE_TODO, DELETE_TODO} from "./todo-actions"

const TodoState = (props) => {
    const initialState = {
        todos:[], //{id: 123, text: 'Some text', complete: false}
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)

    //Add todo
    const addTodo = (todo) => {
        dispatch({
            type: ADD_TODO,
            payload: todo,
        })
    }
    //Toogle a todo
    const toggleTodo = (todoID) => {
        dispatch({
            type: TOGGLE_TODO,
            payload:todoID
        })
    }

    //Delete a todo
    const deleteTodo = (todoID) => {
        dispatch({
            type: DELETE_TODO,
            payload:todoID
        })
    }


    return <todoContext.Provider value={{
        todos: state.todos,
        addTodo,
        toggleTodo,
        deleteTodo
    }}>
        {props.children}
    </todoContext.Provider>
}

export default TodoState;
