import React, { useState, ChangeEvent, FormEvent } from "react";
type AddTodo = (newTodo: string) => void;

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoItem: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    localStorage.setItem('todos', JSON.stringify({ text: newTodo, complete: false }));
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div>
      <h1>Add ToDo List</h1>
    <form>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
    </div>
  );
};
