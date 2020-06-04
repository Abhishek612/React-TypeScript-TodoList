import React, { useState,useEffect } from "react";
import { TodoList } from "./TodoList";
import { AddTodoItem } from "./AddTodoItem";

type ToggleComplete = (selectedTodo: Todo) => void;
type AddTodo = (newTodo: string) => void;

interface Todo {
  text: string
  complete: boolean
}

const InitialAppState:any = []

function gettingDataFromLocalStorage(InitialAppState:any) {
  const stringifiedJSON: string | null = window.localStorage.getItem('todos')
  if (typeof stringifiedJSON === 'string') {
    const Loaded = JSON.parse(stringifiedJSON)
    return Loaded
  }
  return InitialAppState
}

let initialAppState:any = gettingDataFromLocalStorage(InitialAppState)
// JSON.parse(todo_data)
export const initialTodos: Array<Todo> = initialAppState

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos])

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
      setTodos(updatedTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
      // console.log(todos)
      // localStorage.setItem('todos', JSON.stringify(todos));
  };
  const uncompleteTodo: number = todos.filter(t => t.complete === false).length
  return (
    <div>
      <AddTodoItem addTodo={addTodo} />
      <b>{`Total todos remaining:  ${uncompleteTodo} out of ${todos.length}`}</b>
      <TodoList todos={todos} toggleComplete={toggleComplete} />
    </div>
  );
};

export default App;
