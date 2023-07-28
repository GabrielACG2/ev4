'use client';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import '../Assets/nav.css'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="header-nav">
      <div className="nav-icon" onClick={handleMenuToggle}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" onClick={handleLinkClick}>Home</Link>
        </li>
        <li>
          <Link to="/formulario" onClick={handleLinkClick}>Formulario</Link>
        </li>
        <li>
          <Link to="/registros" onClick={handleLinkClick}>Registros</Link>
        </li>
        <li>
          <Link to="/Quienes_somos" onClick={handleLinkClick}>Quiénes somos</Link>
        </li>
        <li>
          <Link to="/Productos" onClick={handleLinkClick}>Productos</Link>
        </li>
        <li>
          <Link to="/Ubicacion" onClick={handleLinkClick}>Ubicación</Link>
        </li>
        <li>
          <Link to="/Redes_sociales" onClick={handleLinkClick}>Redes sociales</Link>
        </li>
      </ul>
    </nav>
  );
};
