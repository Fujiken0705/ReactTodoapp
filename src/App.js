import { useState,useRef } from "react";
import "./App.css";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

import React from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [deadline, setDeadline] = useState("なし");
  const deadlineChange = (e) => setDeadline(e.target.value);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
  //タスクを追加する。
    const name = todoNameRef.current.value;
    if(name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos,{id: uuidv4(),name: name + "  " + deadline, completed:false}];
  });
   todoNameRef.current.value = null;
  };

  

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };
  
  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
  <>
    <title className = "AppTitle">簡易版Todoアプリ</title>
    <body className = "Appbody">
        <input type="text" ref={todoNameRef} className = "taskinput"/>
        <span className="col-2 input-group-text">期限を入力する</span>
          <input
              className="col-8 form-control"
              type="date"
              name="deadline"
              value={deadline}
              placeholder="締切日を選択してください。"
              style={{ width: "200px" }}
              onChange={(e) => deadlineChange(e)}
              required
          />
        <button onClick={handleAddTodo}>タスクを追加</button>
        <button onClick={handleClear}>完了したタスクの削除</button>
    </body>
    <div className = "todo">
    <TodoList todos = {todos} toggleTodo = {toggleTodo} deadline ={deadline}/>
    </div >
    <div className = "remaintask">
    残りのタスク:{todos.filter((todo) => !todo.completed).length}
    </div>
  </>
  );
}

//   Todolistは自作コンポーネント、なので自分で作らなければいけない。

export default App;
