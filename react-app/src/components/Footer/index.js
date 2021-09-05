import './footer.css'
import React from 'react';

const Footer = () => {

  return (
    <nav className="Footer">
            <a href={`https://github.com/johnnvas`} style={{ textDecoration: 'none' }}>
              GitHub
            </a>
            <a href={`https://www.linkedin.com/in/johnn-vasquez-0bb352182/`} style={{ textDecoration: 'none' }}>
              linkedIn
            </a>
            <a href={`https://angel.co/u/johnn-vasquez`} style={{ textDecoration: 'none' }}>
              AngelList
            </a>
    </nav>
  );
}

export default Footer;
