import React from 'react';
import { TodoContext } from '../context/initialContext';
import '../styles/createTodoButton.scss';

function CreateTodoButton() {

  const { setOpenModal, openModal } = React.useContext(TodoContext);

  const onClickButton = () => {
    setOpenModal(!openModal);
  }

  return (
    <div
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      <button >
        +
      </button>
    </div>
  );
}

export { CreateTodoButton };