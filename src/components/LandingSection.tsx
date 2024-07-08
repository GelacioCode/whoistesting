import React from 'react';

const LandingSection: React.FC = () => {
  const handleScroll = () => {
    const section = document.getElementById('second-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-section">
      <div className="overlay">
        <div className="content">
          <h1 className="logo"><span>SITE</span> LOOKUP</h1>
          <p>Welcome to Site Lookup, Search and Check your Domain's Details NOW!</p>
          <div className="arrow-container" onClick={handleScroll}>
            <div className="arrow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
