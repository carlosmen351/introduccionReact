import React from 'react';
import '../styles/todoSearch.scss';

function TodoSearch({searchValue, setSearchValue}) {
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