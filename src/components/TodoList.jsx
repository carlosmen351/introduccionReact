import React from 'react';
import '../styles/todoList.scss'

function TodoList(props) {
  return (
    <section className='todoList'>
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };