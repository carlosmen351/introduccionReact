import React from 'react';
import '../styles/createTodoButton.scss';

function CreateTodoButton(props) {

  const onClickButton = (msg) => alert(msg)

  return (
    <div
      className="CreateTodoButton"
      onClick={ () => onClickButton('Hola Carlos')}
    >
      <button >
        +
      </button>
    </div>
  );
}

export { CreateTodoButton };