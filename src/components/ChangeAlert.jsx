import React from 'react';
import { useStorageListener } from '../hooks/useStorageListener'
import '../styles/changeAlert.scss'

function ChangeAlert({sincronize}) {
const {show, toggleShow } = useStorageListener(sincronize);

  if (show) {
    return (
      <div className='alertChanges'>
        <p className='alertChanges-Text'>
          Se realizaron cambios en tu sesion actual.
        </p>
        <p className='alertChanges-Text'>
          ¿Quieres sincronizar los cambios?.
        </p>
        <button
          className='alertChanges-Button'
          onClick={() => {
            toggleShow(false)
            /* window.location.reload(false) */
            }
          }
        >
          Sincronizar cambios
        </button>
      </div>
    )
  } else {
    return null;
  }
}

export {ChangeAlert};