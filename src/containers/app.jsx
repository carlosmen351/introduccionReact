import React from 'react';
import { TodoProvider } from '../context/initialContext';
import { AppUI } from './AppUI';
import './container.scss'


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;