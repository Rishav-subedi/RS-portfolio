import React from "react";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <a href="/" target="_self">
        <img src="My_Logo.png" alt="Rishav Subedi" />
        </a>
        {/* <span className="logo-text">Rishav</span> */}
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="RISHAV_SUBEDI.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
