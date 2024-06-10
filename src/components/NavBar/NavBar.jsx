import React, { useState } from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="nav-container">
        <a href="./index.html">
          <img
            className="logo"
            src="https://tuwaiq.edu.sa/img/logos/logo.svg"
            alt=""
          />
        </a>
        <div className={`burger-menu`} onClick={toggleMenu}>
          {isMenuOpen ? (
            <FontAwesomeIcon
              style={{ color: 'white' }}
              className="icon"
              icon={faTimes}
            />
          ) : (
            <FontAwesomeIcon
              style={{ color: 'white' }}
              className="icon"
              icon={faBars}
            />
          )}
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>English</li>
          <li>تسجيل الدخول</li>
          <li>
            <a href="./TestCenter.html"> مركز الاختبارات </a>
          </li>
          <li>الأكاديميات التابعة</li>
          <li>
            <a href="./about.html"> حول الأكادمية </a>
          </li>
          <li>المعسكرات والبرامج</li>
          <li>
            <a href="./index.html"> الرئيسية</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
