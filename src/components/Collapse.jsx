import React, { useState } from 'react';
import arrow from '../assets/arrow.png';
import '../styles/Collapse.css';

const Collapse = ({ title, description }) => {
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);

return (
<div className="collapse-container">
<div className="collapse-header" style={{ backgroundColor: '#FF6060' }} onClick={toggle}>
<span>{title}</span>
<img className={isOpen ? 'rotate' : ''} src={arrow} alt="arrow" />
</div>
{isOpen && (
<div className="collapse-body">
<p>{description}</p>
</div>
)}
</div>
);
};

export default Collapse;