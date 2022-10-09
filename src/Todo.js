import React from 'react';
import "./todo.css";

const Todo = ({ todo, toggleTodo }) => {

  const handleTodoClick = ()=>{
    toggleTodo(todo.id);
  };

  return (
    <div>
      <label className = "atodo">
        <input 
          type= "checkbox" 
          cheaked={todo.completed} 
          readonly
          onChange={handleTodoClick} 
        />
      </label>
      {todo.name}
    </div>
  );
};

export default Todo;