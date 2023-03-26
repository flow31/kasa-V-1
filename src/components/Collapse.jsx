import React, { useState } from 'react';
import arrow from '../assets/arrow.png';
import '../styles/CollapseLogements.css';

const Collapse = ({ title, content, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
  
    <div className={`collapse-container ${className}`}>
      <div className="collapse-header" onClick={toggle}>
        <span>{title}</span>
        <img className={isOpen ? 'rotate' : ''} src={arrow} alt="arrow" />
      </div>
      {isOpen && (
        <div className="collapse-body">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  
  );
};

export default Collapse;

