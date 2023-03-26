import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Collapse from '../components/Collapse';
import aboutData from '../data/about.json';
import Banner from '../components/Banner';
import '../styles/CollapseAbout.css';
import IMG from '../assets/img-about.png'


function About() {
  return (
    <div>
      <main>
        <Header />
        <Banner backgroundImage={IMG} title='' /> 
        <div className="about-container">
          {aboutData.map((item, index) => (
            <Collapse
            key={index}
            title={item[`title${index + 1}`]}
            content={item[`description${index + 1}`]}
            className="about-collapse"
            />
          ))}
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default About;

