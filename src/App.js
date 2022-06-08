import "./styles.css";
import { useState } from "react";
export default function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValues] = useState("");
  function addItem(e) {
    e.preventDefault();
    if (!value) return;
    const newtodos = [...todos, { text: value, isCompleted: false }];
    setTodos(newtodos);
    setValues("");
  }
  function removeItem(e) {
    var index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }
  return (
    <>
      <h4>Todo:{todos.length}</h4>
      <form onSubmit={addItem}>
        <input
          type="text"
          className="input"
          placeholder="Add item"
          value={value}
          onChange={(e) => setValues(e.target.value)}
        />
      </form>
      {todos.map((item, i) => (
        <div className="todo" key={i} id={i}>
          {item.text}
          <button key={i} id={i} onClick={removeItem}>
            X
          </button>
        </div>
      ))}
    </>
  );
}
