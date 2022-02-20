import React from 'react';
import '../styles/createTodoButton.scss';

function CreateTodoButton({ setOpenModal, openModal }) {
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