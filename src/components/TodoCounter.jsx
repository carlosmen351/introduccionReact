import React from 'react';
import '../styles/TodoCounter.scss';

function TodoCounter({total, completed}) {

  return (
    <div className="TodoCounter">
      <h2 >Tu lista de tareas</h2>
      <p>Has completado {completed} tareas de un total de { total }</p>
    </div>
  );
}

export { TodoCounter };