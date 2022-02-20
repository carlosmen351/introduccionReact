import React from "react";
import '../styles/todoForm.scss'

function TodoForm({addTodo, setOpenModal}) {

  const [newTodoValue, setNewTodoValue] = React.useState('');

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