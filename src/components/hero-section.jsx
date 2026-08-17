import React from "react";

function HeroSection({ LogoFooter, onClick }) {
  return (
    <div id="home" className="hero">
      <div className="hero-pattern" />
      <div className="hero-glow" />

      {/* Watermark Logo */}
      <div className="hero-watermark">
        <img src={LogoFooter} alt="Dawat-e-Haq Logo" />
      </div>

      <div className="hero-content">
        {/* Center Welcome */}
        <h1 className="hero-welcome">
          Welcome to <span>Dawat-e-Haq</span>
        </h1>

        <div className="hero-arabic">دعوتِ حق</div>

      </div>
        <div className="explore-sec">
          <button className="btn-primary" onClick={() => onClick("programs")}>
            Explore Our Work
          </button>

          <button className="btn-outline" onClick={() => scrollTo("donate")}>
            Donate Now
          </button>
        </div>

      <div className="hero-scroll"></div>
    </div>
  );
}

export default HeroSection;
