import React from 'react';
import '../styles/todoList.scss'

function TodoList(props) {
  return (
    <section className='todoList'>
      {props.error && props.onError()}
      {props.loading && props.onloading()}
      {(!props.loading && !props.totalTodos) && props.onEmpty()}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}
      {(!props.loading && !props.error) && props.searchedTodos.map(props.render || props.children)}
    </section>
  );
}

export { TodoList };