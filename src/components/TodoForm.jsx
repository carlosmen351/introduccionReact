import React from "react";
import { TodoContext } from "../context/initialContext";
import '../styles/todoForm.scss'

function TodoForm() {

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext)

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }
  const onCancel = () => {
    setOpenModal(false);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="formulario"
    >
      <label className="formulario_title">
        Escribe tu nueva Tarea
      </label>
      <textarea
        className="formulario_text"
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar cebolla"
      >

      </textarea>
      <div className="container">
        <button
          className="container_cancel"
          onClick={onCancel}
          type="button"
        >
          cancelar
        </button>
        <button
          className="container_add"
          type="submit"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export {TodoForm}