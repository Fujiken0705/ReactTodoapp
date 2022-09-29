import React from 'react';

const Todo = ({ todo, toggleTodo }) => {

  const handleTodoClick = ()=>{
    toggleTodo(todo.id);
  };

  return (
    <div>
      <label>
        <input 
          type= "checkbox" 
          cheaked={todo.copleted} 
          readonly
          onChange={handleTodoClick} 
        />
      </label>
      {todo.name}
    </div>
  );
};

export default Todo;