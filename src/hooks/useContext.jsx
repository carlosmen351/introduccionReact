import React from "react";
import { TodoContext } from '../context/initialContext'

function useContext() {
  const {
    error,
    loading,
    searchedTodos,
    completedTodo,
    deleteTodo
  } = React.useContext(TodoContext);


};