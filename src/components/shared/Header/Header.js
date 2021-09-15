import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>To Do List</h1> 
        <ul className="header-list">
            
            <Link to="/" className="header-list-item">
              <li>Home</li>
            </Link>
            <Link to="/add" className="header-list-item">
              <li>Adicionar Nova Tarefa</li>
            </Link>
        </ul>
        
      </div>
    </header>
  )
}

export default Header