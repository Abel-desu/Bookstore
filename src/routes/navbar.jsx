/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
      

      <nav className="navstyle"
      style={{
        display: 'flex',
        gap: '5px',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
          <h1 className="math" style={{ width: '88%' }}>Book store</h1>
      <div>
        <Link to="/">Books</Link>{' '}
          |
          {' '}
        <Link to="/catagories">catagories</Link>
      </div>
    </nav>

    );
  }
  