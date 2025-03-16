import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link className="logo" to="/">Logo</Link>
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/page1">Page 1</Link>
      <Link className="nav-link" to="/page2">Page 2</Link>
    </header>
  );
}

export default Header;
