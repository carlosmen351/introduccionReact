import React from 'react';
import '../styles/TodoCounter.scss';

function TodoCounter({totalTodos, completedTodos, loading}) {
  return (
    <div className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
      <h2 >Tu lista de tareas</h2>
      <p>Has completado {completedTodos} tareas de un total de { totalTodos }</p>
    </div>
  );
}

export { TodoCounter };