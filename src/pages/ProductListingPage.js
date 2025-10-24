import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { plantsData, categories } from '../data/plantsData';
import Header from '../components/Header';
import './ProductListingPage.css';

const ProductListingPage = () => {
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (plant) => {
    addToCart(plant);
    setAddedItems(prev => ({ ...prev, [plant.id]: true }));
    
    // Reset the button text after 2 seconds
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [plant.id]: false }));
    }, 2000);
  };

  const renderPlantsByCategory = (category) => {
    const categoryPlants = plantsData.filter(plant => plant.category === category);
    
    return (
      <div key={category} className="category-section">
        <h2 className="category-title">{category}</h2>
        <div className="plants-grid">
          {categoryPlants.map(plant => (
            <div key={plant.id} className="plant-card">
              {plant.onSale && <div className="sale-badge">SALE</div>}
              <div className="plant-image-container">
                <img src={plant.image} alt={plant.name} className="plant-image" />
              </div>
              <div className="plant-info">
                <h3 className="plant-name">{plant.name}</h3>
                <p className="plant-price">${plant.price}</p>
                <p className="plant-description">{plant.description}</p>
                <button 
                  className={`add-to-cart-btn ${addedItems[plant.id] ? 'added' : ''}`}
                  onClick={() => handleAddToCart(plant)}
                >
                  {addedItems[plant.id] ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="product-listing-page">
      <Header />
      <div className="products-container">
        {categories.map(category => renderPlantsByCategory(category))}
      </div>
    </div>
  );
};

export default ProductListingPage;
