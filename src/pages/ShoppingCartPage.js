import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import './ShoppingCartPage.css';

const ShoppingCartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartItemsCount } = useCart();

  const handleIncrease = (plantId, currentQuantity) => {
    updateQuantity(plantId, currentQuantity + 1);
  };

  const handleDecrease = (plantId, currentQuantity) => {
    if (currentQuantity > 1) {
      updateQuantity(plantId, currentQuantity - 1);
    }
  };

  const handleDelete = (plantId) => {
    removeFromCart(plantId);
  };

  const handleCheckout = () => {
    alert('Coming Soon! Checkout functionality will be implemented.');
  };

  return (
    <div className="shopping-cart-page">
      <Header />
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p className="empty-cart-message">Your cart is empty</p>
            <Link to="/products">
              <button className="continue-shopping-btn">Continue Shopping</button>
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-summary">
              <h2 className="total-amount">Total Cart Amount: ${getCartTotal()}</h2>
              <p className="total-items">Total Items: {getCartItemsCount()}</p>
            </div>

            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image-container">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                  </div>
                  
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-unit-price">${item.price}</p>
                    
                    <div className="quantity-controls">
                      <button 
                        className="quantity-btn"
                        onClick={() => handleDecrease(item.id, item.quantity)}
                      >
                        -
                      </button>
                      <span className="quantity-display">{item.quantity}</span>
                      <button 
                        className="quantity-btn"
                        onClick={() => handleIncrease(item.id, item.quantity)}
                      >
                        +
                      </button>
                    </div>
                    
                    <p className="cart-item-total">Total: ${item.price * item.quantity}</p>
                    
                    <button 
                      className="delete-btn"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-actions">
              <Link to="/products">
                <button className="continue-shopping-btn">Continue Shopping</button>
              </Link>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartPage;
