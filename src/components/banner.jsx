import React from "react";
import banner from "../assets/banner.png"; // background image
import logo from "../assets/logo-footer.jpg"; // Dawat-e-Haq logo

const IslamicBanner = () => {
  return (
    <>
    
    <section className="banner">
        <img src={banner} alt="Dawat-e-Haq Logo" width={1100} height={400}/>
      {/* <div className="overlay">

        <h1 className="title">Dawat-e-Haq</h1>

        <p className="subtitle">
          Spread Knowledge • Support Charity • Serve Humanity
        </p> */}

        <button className="donate-btn">Donate Now</button>
      {/* </div> */}
    </section>
    </>
  );
};

export default IslamicBanner;