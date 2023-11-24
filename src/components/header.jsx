import React from 'react'
import './style.css'

const Header = ({title, subtitle}) => {
  return (
    <header>
        <h1 data-testid = "heading">{title}</h1>
        <span data-testid = "subheading">{subtitle}</span>
    </header>
  )
}

export default Header