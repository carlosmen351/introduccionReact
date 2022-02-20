import React from 'react';

function useStorageListener(sincronizeItem) {
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1') {
        console.log('hubo cambios en todos_v1');
        setStorageChange(true)
      }
    });

    const toggleShow = () => {
      sincronizeItem();
      setStorageChange(false);
    }

  return {
    show: storageChange,
    toggleShow,
  }
}

export { useStorageListener };