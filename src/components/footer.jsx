import React from 'react'
import data from '../../data.json'
import '../styles/footer.scss'

const Footer = () => {
  return (
    <div>
      <div className='footer_info'>
        <p>{data.Adios}</p>
        <p>{data.De}</p>
        <p>{data.Registrada}</p>
      </div>
    </div>
  )
}

export { Footer };
