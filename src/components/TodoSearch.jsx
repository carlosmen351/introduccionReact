import React from 'react';
import '../styles/todoSearch.scss';

function TodoSearch({searchValue, setSearchValue, loading }) {

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="TodoSearch">
      <input
        placeholder="Busca tus deberes..."
        value={searchValue}
        onChange={onSearchValueChange}
        disabled={loading}
      />
    </div>
  );
}

export { TodoSearch };