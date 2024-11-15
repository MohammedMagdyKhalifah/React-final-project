import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div
      className="about-us-container"
      style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/23/20/29/sunflower-1537596_1280.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "20px",
        borderRadius: "10px"
      }}
    >
      <h1 className="about-us-heading">About Us</h1>
      <p className="about-us-description">Welcome to Paradise Nursery, where green meets serenity!</p>
      <p>
        At Paradise Nursery, we provide high-quality plants that enhance your surroundings and promote a healthier, more sustainable lifestyle.
      </p>
      <p>
        Join us on our journey to create a greener world. Experience the beauty of nature at Paradise Nursery!
      </p>
    </div>
  );
}

export default AboutUs;
