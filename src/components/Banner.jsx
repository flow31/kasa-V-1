import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Banner.css';

function Banner({ backgroundImage, title }) {
  return (
    <section className="banner">
      <img
        className="banner-image"
        src={backgroundImage}
        alt="Background"
      />
      <div className="banner-text">
        <h1>{title}</h1>
      </div>
    </section>
  );
}

Banner.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Banner;
