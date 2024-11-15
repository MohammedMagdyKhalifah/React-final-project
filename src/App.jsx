import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {/* Landing Page */}
      {!showProductList && (
        <div
          className="landing-page"
          style={{
            backgroundImage: "url('https://i.pinimg.com/originals/4a/bc/87/4abc87674cc96513e370193e116e2044.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            color: "white",
          }}
        >
          <div className="content">
            <h1>Welcome to Paradise Nursery</h1>
            <p>Where Green Meets Serenity</p>
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
          <div className="aboutus-container">
            <AboutUs />
          </div>
        </div>
      )}

      {/* Product List Page */}
      {showProductList && <ProductList />}
    </div>
  );
}

export default App;
