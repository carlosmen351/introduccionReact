import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import Footer from '../components/footer';
import '../styles/global.scss';



/* const defaultTodos = [
  { text: 'Comer 5 verduras', completed: false },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Hacer ejercicio 30 min', completed: false },
  { text: 'Dormir 8 horas', completed: false },
]; */




function App() {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('ToDo_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed === true).length;
  const totalToDos = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  React.useEffect(() => {
    console.log('use effect')
  }, [totalToDos]);

  return (
    <React.Fragment>
      <TodoCounter
        total={totalToDos}
        completed={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue = {setSearchValue}
      />
      <TodoList>
        {error && <p>Hubo un error</p>}
        {loading && <p>Cargando</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primera Tarea</p>}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {
              completeTodo(todo.text)
            }}
            onDelete={() => {
              deleteTodo(todo.text)
            }}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      <Footer/>
    </React.Fragment>
  );
};

export default App;