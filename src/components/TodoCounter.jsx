import React from 'react';
import { TodoContext } from '../context/initialContext';
import '../styles/TodoCounter.scss';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <div className="TodoCounter">
      <h2 >Tu lista de tareas</h2>
      <p>Has completado {completedTodos} tareas de un total de { totalTodos }</p>
    </div>
  );
}

export { TodoCounter };