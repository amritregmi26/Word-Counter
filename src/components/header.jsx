import React from 'react'
import './style.css'

const Header = ({title, subtitle}) => {
  return (
    <header>
        <h1>{title}</h1>
        <span>{subtitle}</span>
    </header>
  )
}

export default Header