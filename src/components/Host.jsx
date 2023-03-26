import React from 'react';
import '../styles/Host.css'
const Host = ({ name, picture }) => {
  return (
    <section className='host'>
      <p>{name}</p>
      <img src={picture} alt={`${name}'s profile`}/>
      </section>
  );
};

export default Host;
