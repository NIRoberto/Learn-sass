import React from 'react';
import 'style/nav.scss';

const NavBar = () => {
  return (
    <header>
      <div className="sub-nav">
        <ul>
          <li>Huye-Rwanda</li>
          <li>karisimbi@gmail.com</li>
          <li>+2507874925421277</li>
          <li> Powered by Robert</li>
        </ul>
      </div>
      <nav style={{ position: 'sticky', top: '0' }}>
        <div className="logo">karisimbi tecnology</div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">About</a>
          </li>
          <li>
            <a href="#home">services</a>
          </li>
          <li>
            <a href="#home">contract</a>
          </li>
          <li>
            <a href="#home">login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
