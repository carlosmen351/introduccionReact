import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import Footer from '../components/footer';
import '../styles/global.scss';

const todos = [
  { text: 'Comer 5 verduras', completed: false },
  { text: 'Tomar el cursso de intro a React', completed: true },
  { text: 'Hacer ejercicio 30 min', completed: true },
  { text: 'Dormir 8 horas', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
      <Footer/>
    </React.Fragment>
  );
}

export default App;