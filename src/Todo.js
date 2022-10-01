import React from 'react';

const Todo = ({ todo, toggleTodo, deadline }) => {

  const handleTodoClick = ()=>{
    toggleTodo(todo.id);
  };

  return (
    <div>
      <label>
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