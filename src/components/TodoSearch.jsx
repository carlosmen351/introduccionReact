import React from 'react';
import { TodoContext } from '../context/initialContext';
import '../styles/todoSearch.scss';

function TodoSearch() {

  const {searchValue, setSearchValue } = React.useContext(TodoContext)

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <div className="TodoSearch">
      <input
        placeholder="Busca tus deberes..."
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </div>
  );
}

export { TodoSearch };