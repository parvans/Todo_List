import "./styles.css";
import { useState } from "react";
export default function App() {
  const [todos, setTodos] = useState([
    { text: "Orange", isCompleted: false },
    { text: "Apple", isCompleted: false },
    { text: "Banana", isCompleted: false }
  ]);
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
      {todos.map((item, i) => (
        <div className="todo" key={i} id={i} onClick={removeItem}>
          {item.text}
        </div>
      ))}
      <form onSubmit={addItem}>
        <input
          type="text"
          className="input"
          placeholder="Add item"
          value={value}
          onChange={(e) => setValues(e.target.value)}
        />
      </form>
    </>
  );
}
