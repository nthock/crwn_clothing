import React from "react";
import "./homepage.styles.scss"

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">

        <div className="menu-item">
          <div className="content">
            <h1 class="title">HATS</h1>
            <span class="subtitle">SHOP NOW</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 class="title">JACKETS</h1>
            <span class="subtitle">SHOP NOW</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 class="title">Sneakers</h1>
            <span class="subtitle">SHOP NOW</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 class="title">Womens</h1>
            <span class="subtitle">SHOP NOW</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 class="title">MENS</h1>
            <span class="subtitle">SHOP NOW</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;