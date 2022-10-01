import { useState,useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const [deadline, setDeadline] = useState("なし");
  };


  const todoNameRef = useRef();

  const handleAddTodo = () => {
  //タスクを追加する。
    const name = todoNameRef.current.value;
    if(name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos,{id: uuidv4(),name: name, completed:false ,deadline:deadline}];
  });
   todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const deadlineChange = (e) => setDeadline(e.target.value);
  
  const deadlineAfterChange = (e, todo) => {
    const new_todos = [...todos];
    const new_deadline = e.target.value;
    const target_index = todos.findIndex((eachTodo) => eachTodo === todo);
    new_todos[target_index].deadline = new_deadline;
    setTodos(new_todos);
  
  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoList todos = {todos} toggleTodo = {toggleTodo}/>
      <input type="text" ref={todoNameRef} />
      <span className="col-2 input-group-text">期限</span>
            <input
              className="col-8 form-control"
              type="date"
              name="deadline"
              value={deadline}
              placeholder="締切日を選択してください。"
              style={{ width: "200px" }}
              onChange={(e) => deadlineChange(e)}
              required
            ></input>
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
   </>
  );
}

export default App;
