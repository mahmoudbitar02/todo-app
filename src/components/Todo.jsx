import Button from "./Buttons";

function Todo({ text, checked, deleteTodo, toggle, id }) {
  return (
    <>
      <li className="todo-list__item">
        <div className="todo-list__item-left">
          <input className="todo-list__checkbox" id={id} type="checkbox" name="" checked={checked ? checked : false} onChange={toggle} />
          <label className={`todo-list__label ${checked ? "done" : ""}`} htmlFor={id}>
            {text}
          </label>
        </div>
        <Button className="input-container__button" text={"Löschen"} onClick={deleteTodo} />
      </li>
    </>
  );
}

export default Todo;
