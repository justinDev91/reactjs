import React from "react"
// import { BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import TodoState from "./context/todoState";

function App() {
  return (
    <div className="App">
        <h1>Reducer and context Exemple</h1>
        <div className="app_todoApp">
          <TodoState>
            <TodoInput />
            <TodoList />
          </TodoState>
        </div>
    </div>
  );
}

export default App;
