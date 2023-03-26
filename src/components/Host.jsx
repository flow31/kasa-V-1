import React from 'react';
import '../styles/Host.css'


function Host({ name, picture }) {
  const [firstName, lastName] = name.split(' ');

  return (
    <section className='host'>
      <div className='host-name'>
        <span className='host-first-name'>{firstName}</span>
        <span className='host-last-name'>{lastName}</span>
      </div>
      <img src={picture} alt={`${name}'s profile`}/>
    </section>
  );
}

export default Host;

