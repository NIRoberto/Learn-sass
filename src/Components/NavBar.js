import React from 'react';
import { DiJavascript1 } from 'react-icons/di';
import 'style/nav.scss';
import Act from './Act';
import NotAct from './NotAct';

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

      <div className="skills">
        <div>
          <div className="main">
            <div className="logo">
              <DiJavascript1 />
            </div>
            <div className="skills-bar">
              <Act />
              <Act />
              <Act />
              <Act />
              <Act />
              <Act />
              <Act />
              <NotAct />
              <NotAct />
              <NotAct />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </header>
  );
};

export default NavBar;
