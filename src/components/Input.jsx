import Button from "./Buttons";
import { useEffect, useState } from "react";
import Todo from "./Todo";
import "./input.scss";
import "./todo.scss";

function InputField() {
  const savedTodos = JSON.parse(localStorage.getItem("todos"));
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(savedTodos || []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleAddClicked() {
    if (inputValue.trim() === "") return;
    const updatedTodos = [...todos, { text: inputValue, checked: false }];
    setTodos(updatedTodos);
    setInputValue("");
    // localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  function handleToggle(key) {
    const updatedTodos = [...todos];
    updatedTodos[key].checked = !updatedTodos[key].checked;
    setTodos(updatedTodos);

    // localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  function handleDeleteTodo(key) {
    const filterdTodos = todos.filter((_, index) => index !== key);
    setTodos(filterdTodos);
    // localStorage.setItem("todos", JSON.stringify(filterdTodos));
  }

  return (
    <>
      <div className="input-container">
        <input className="input-container__input" value={inputValue} onChange={handleInputChange} type="text" placeholder="Enter Your text here" />
        <Button className="input-container__button" text="Add" onClick={handleAddClicked} />
      </div>
      <ul className="todo-list">
        {todos.length > 0 ? (
          todos.map((todo, key) => (
            <Todo
              key={key}
              deleteTodo={() => handleDeleteTodo(key)}
              id={key + 1}
              text={todo.text}
              checked={todo.checked}
              toggle={() => handleToggle(key)}
            />
          ))
        ) : (
          <p>Keine Todos vorhanden</p>
        )}
      </ul>
    </>
  );
}

export default InputField;
