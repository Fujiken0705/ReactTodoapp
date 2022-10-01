import React from 'react';
import Todo from "./Todo";

const TodoList = ({ todos , toggleTodo , deadline }) => {
  return todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} deadline={deadline} />);
};

export default TodoList;