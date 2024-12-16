import React from 'react';
import './HomePage.css';

interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  discount?: string;
}

interface Category {
  id: number;
  image: string;
  title: string;
}

const HomePage: React.FC = () => {
  const products: Product[] = [
    { id: 1, image: '/images/trousers.jpg', title: 'Trousers', price: '$20', discount: '40%' },
    { id: 2, image: '/images/hats.jpg', title: 'Hats', price: '$15', discount: '20%' },
    { id: 3, image: '/images/gowns.jpg', title: 'Gowns', price: '$50', discount: '60%' },
    { id: 4, image: 'cargo_pants.jpg', title: 'Brown Cargo Pants', price: '$25', discount: '40%' },
    { id: 5, image: '/images/bluejeans.jpg', title: 'Blue Jeans', price: '$28', discount: '30%' },
    { id: 6, image: 'sweatpants.jpg', title: 'Sweatpants', price: '$18', discount: '60%' },
    { id: 7, image: 'leggings.jpg', title: 'Leggings', price: '$20', discount: '25%' },
    { id: 8, image: 'chinos_pants.jpg', title: 'Chinos Pants', price: '$40', discount: '20%' },
    { id: 9, image: 'pajamas.jpg', title: 'Pajamas', price: '$22', discount: '50%' },
  ];

  const categories: Category[] = [
    { id: 1, image: '/images/men.jpg', title: 'Men' },
    { id: 2, image: '/images/women.jpg', title: 'Women' },
    { id: 3, image: '/images/children.jpg', title: 'Children' },
  ];

  const handleBuyNowClick = (title: string) => {
    alert('You clicked Buy Now for ${title}');
  };

  const handleShopNowClick = (title: string) => {
    alert('You clicked Shop Now for ${title}');
  };

  const handleSearchClick = () => {
    alert('Search button clicked');
  };

  const handleSendMessageClick = () => {
    alert('Message sent');
  };

  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="logo">My Wheezy Store</div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button className="btn" onClick={handleSearchClick}>Search</button>
        </div>
      </nav>

      <div className="container">
        <h2>Available Items on Sale</h2>
        <div className="product-list">
          {products.slice(0, 3).map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: {product.price}</p>
              {product.discount && <span className="discount">{product.discount} off</span>}
              <button className="btn" onClick={() => handleBuyNowClick(product.title)}>Buy Now</button>
            </div>
          ))}
        </div>
        <button className="btn">See More</button>

        <h2>Shop by Category</h2>
        <div className="category-list">
          {categories.map(category => (
            <div key={category.id} className="category-card">
              <img src={category.image} alt={category.title} />
              <h3>{category.title}</h3>
              <button className="btn" onClick={() => handleShopNowClick(category.title)}>Shop Now</button>
            </div>
          ))}
        </div>
        <button className="btn">View More Categories</button>

        <h2>Available Items on Sale</h2>
        <div className="product-list">
          {products.slice(3).map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: {product.price}</p>
              {product.discount && <span className="discount">{product.discount} off</span>}
              <button className="btn" onClick={() => handleBuyNowClick(product.title)}>Buy Now</button>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <form onSubmit={(e) => { e.preventDefault(); handleSendMessageClick(); }}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button className="btn" type="submit">Send message</button>
        </form>
      </footer>
    </div>
  );
}

export default HomePage;