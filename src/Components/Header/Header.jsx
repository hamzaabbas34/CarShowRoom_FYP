import React from 'react'
import './Header.css'
export default function Header({title , paragraph}) {
  return (
    <div className='headerbg'>
        <div className='headercontent'>
            <h1>{title}</h1>
            <p>{paragraph}</p>
        </div>
    </div>
  )
}
