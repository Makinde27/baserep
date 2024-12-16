import React from 'react';
import './CheckoutPage.css';

const CheckoutPage: React.FC = () => {
  return (
    <div className="checkout-page">
      <header className="header">
        <div className="logo">MR WHIZZY STORE</div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#" className="active">Cart</a>
        </nav>
      </header>
      <main className="main-content">
        <div className="payment-details">
          <h2>Payment Details</h2>
          <p>Make payment via</p>
          <div className="payment-method">
            <h3>Bank transfer</h3>
            <div className="form-group-group">
              <div className="form-group">
                <label>Bank Name</label>
                <input type="text" placeholder="Kuda Bank" />
              </div>
              <div className="form-group">
                <label>Account number</label>
                <input type="text" placeholder="2022345890" />
              </div>
            </div>
            <div className="form-group">
              <label>Account name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <button className="bank-transfer-btn">I have made the transfer</button>
          </div>
          <div className="payment-method">
            <h3>Credit/debit card</h3>
            <div className="form-group-group">
              <div className="form-group">
                <label>Card number</label>
                <input type="text" placeholder="0000 0000 0000 0000" />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input type="text" placeholder="202" />
              </div>
            </div>
            <div className="form-group">
              <label>Expiry date</label>
              <input type="text" placeholder="1/20" />
            </div>
            <button className="credit-card-btn">Make Payment</button>
          </div>
        </div>
        <div className="payment-summary">
          <h3>Payment Summary</h3>
          <p>Total Amount to be paid</p>
          <h2>27,200</h2>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-logo">MR WHIZZY STORE</div>
        <nav className="footer-nav">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Cart</a>
        </nav>
        <div className="footer-message">
          <p>Have a question or complaint? Send us a message!</p>
          <input type="text" placeholder="Type a message..." />
          <button>Send message</button>
        </div>
      </footer>
    </div>
  );
};

export default CheckoutPage;