import React, { useState } from 'react';
import './CartPage.css';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'Pallazo', price: 8000, quantity: 1, image: '/images/pallazo.jpg' },
    { id: 2, name: 'Blue Jeans', price: 12000, quantity: 2, image: '/images/bluejeans.jpg' }
  ]);

  const handleRemove = (id: number): void => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCheckout = (): void => {
    console.log('Proceeding to checkout');
    alert('Proceeding to checkout'); 
  };

  return (
    <div className="cart-page">
      <header className="header">
        <div className="logo">MYWHIZZY STORE</div>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/cart" className="active">Cart</a></li>
          </ul>
        </nav>
      </header>
      <main className="cart-content">
        <section className="cart-items">
          <h2>View items in your cart</h2>
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <p>{item.name}</p>
                <p>Price: #{item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button className="remove-btn" onClick={() => handleRemove(item.id)}>
                Remove <span role="img" aria-label="trash">🗑</span>
              </button>
            </div>
          ))}
          {cartItems.length > 0 && (
             <a href='/checkout'> <button className="checkout-btn" >Proceed to checkout</button></a>
          )}
        </section>
        <aside className="similar-items">
          <h3>Similar items</h3>
          <div className="similar-item">
            <img src="/images/similar-item.jpg" alt="similar-item" />
            <div className="similar-details">
              <p>Price: #8,000</p>
              <p>Available pieces: 6</p>
            </div>
            <button className="add-to-cart-btn">Add to cart</button>
          </div>
        </aside>
      </main>
      <footer className="footer">
        <div className="footer-left">
          <div className="footer-logo">MYWHIZZY STORE</div>
          <ul className="footer-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <p>Have a question or complaint? Send us a message!</p>
          <input type="text" placeholder="Talk to us..." />
          <button className="send-btn">Send message</button>
        </div>
      </footer>
    </div>
  );
}

export default CartPage;
