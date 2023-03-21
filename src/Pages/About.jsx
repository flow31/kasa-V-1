import React from 'react';
import Navbar from '../components/Header';
import Footer from '../components/Footer';
import Collapse from '../components/Collapse';
import aboutData from '../data/about.json';


function About() {
  return (
    <div>
      <main>
        <Navbar />
        <div className="about-container">
          {aboutData.map((item, index) => (
            <Collapse
              key={index}
              title={item[`title${index + 1}`]}
              description={item[`description${index + 1}`]}
            />
          ))}
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default About;
