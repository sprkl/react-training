import React from "react";

import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
