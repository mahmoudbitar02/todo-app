import Button from "./Buttons";
import { useState } from "react";
import Todo from "./Todo";
import "./input.scss";
import "./todo.scss";

function InputField() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleAddClicked() {
    if (inputValue.trim() === "") return;
    setTodos([...todos, { text: inputValue, checked: false }]);
    setInputValue("");
  }

  function handleToggle(key) {
    const updatedTodos = [...todos];
    updatedTodos[key].checked = !updatedTodos[key].checked;
    setTodos(updatedTodos);
    console.log(todos);
  }

  return (
    <>
      <div className="input-container">
        <input className="input-container__input" value={inputValue} onChange={handleInputChange} type="text" placeholder="Enter Your text here" />
        <Button className="input-container__button" text="Add" onClick={handleAddClicked} />
      </div>
      <ul className="todo-list">
        {todos.length > 0 ? (
          todos.map((todo, key) => <Todo key={key} id={key + 1} text={todo.text} checked={todo.checked} toggle={() => handleToggle(key)} />)
        ) : (
          <p>Keine Todos vorhanden</p>
        )}
      </ul>
    </>
  );
}

export default InputField;
