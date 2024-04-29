import React, { useState } from 'react';
import './Navbarr.css';

function Navbarf() {
    
    
      const [isOpen, setIsOpen] = useState(false);
    
      const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };
    
      return (
        <div className={`app ${isOpen ? 'open' : ''}`}>
          <div className="sidebar">
            <h2>Sidebar</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="content">
            <button onClick={toggleSidebar}>Toggle Sidebar</button>
            <p>Main Content</p>
          </div>
        </div>
      );
    }
    
    export default Navbarf;
    