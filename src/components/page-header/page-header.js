import React from 'react'
import { Link } from 'react-router-dom'
import './page-header.scss'

const PageHeader = () => {
   return (
      <header className='page-header'>
         <h1>Рассчет калорий</h1>
         <Link to='/' className='btn-primary'> на главную </Link>
      </header>
   )
}

export default PageHeader