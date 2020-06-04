import React from "react";
import "./TodoListItem.css";

interface Todo  {
  text: string;
  complete: boolean;
};
type ToggleComplete = (selectedTodo: Todo) => void;
interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete
}) => {
  return (
    <li>
      <label className={todo.complete ? "complete" : undefined}>
        <input className = 'checkButton'
        style = {{ display : 'none'}}
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
        />
        <h3>{todo.text}</h3>
      </label>
    </li>
  );
};
