import React, {useEffect, useState} from 'react';
import './nav.css';

const Nav = () => {
    const [show, setShow] = useState(false);
  
    useEffect(() => {
      setShow(true);
    }, []);

  return (
    <nav style={{ padding: '1rem' }}>
        <a href="/" className='gh' style={{ textDecoration: 'none', fontSize: '1.5rem' }}>
            <span className='logo'>Gerson Higgins</span>
            <span className='under-logo'>Draftman Portfolio</span>
        </a>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ marginRight: '1rem' }}>
          <a href="/" style={{ color: '#61dafb', textDecoration: 'none' }}>Home</a>
        </li>
        <li style={{ marginRight: '1rem' }}>
          <a href="/about" style={{ color: '#61dafb', textDecoration: 'none' }}>About</a>
        </li>
        <li>
          <a href="/contact" style={{ color: '#61dafb', textDecoration: 'none' }}>Contact</a>
        </li>
      </ul>
      <span className={show ? 'underline fade-rigth' : 'underline'}></span>
    </nav>
  );
};

export default Nav;