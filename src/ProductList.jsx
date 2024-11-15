import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { addItem } from './CartSlice';
import './ProductList.css';

function ProductList() {
  const [showCart, setShowCart] = useState(false); 
  const dispatch = useDispatch();

  // Get items from Redux store to calculate the cart item count
  const cartItems = useSelector((state) => state.cart.items);
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: 15
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: 12
        },
        {
          name: "Peace Lily",
          image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
          description: "Removes mold spores and purifies the air.",
          cost: 18
        },
      ]
    }
    // Add more categories and plants here as needed
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar" style={{ backgroundColor: '#4CAF50', padding: '15px', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo">
          <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="Logo" style={{ width: '40px', marginRight: '10px' }} />
          <span style={{ fontSize: '24px', fontWeight: 'bold' }}>Paradise Nursery</span>
          <p style={{ margin: 0, fontStyle: 'italic' }}>Where Green Meets Serenity</p>
        </div>
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center' }}>
          <a href="#" onClick={handleContinueShopping} style={{ color: 'white', marginRight: '20px', fontSize: '18px', textDecoration: 'none' }}>Plants</a>
          <a href="#" onClick={handleCartClick} style={{ color: 'white', position: 'relative', textDecoration: 'none' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="32" width="32">
              <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#fff" strokeWidth="2" />
              <circle cx="80" cy="216" r="12" fill="#fff" />
              <circle cx="184" cy="216" r="12" fill="#fff" />
            </svg>
            {/* Display cart item count */}
            <span style={{
              position: 'absolute', top: '-10px', right: '-10px', backgroundColor: 'red', color: 'white', borderRadius: '50%', padding: '2px 8px', fontSize: '12px'
            }}>
              {totalItemsInCart}
            </span>
          </a>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h1><div>{category.category}</div></h1>
              <div className="product-list">
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-description">{plant.description}</div>
                    <div className="product-cost">${plant.cost}</div>
                    <button className="product-button" onClick={() => handleAddToCart(plant)}>
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
