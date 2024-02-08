import React, { useState } from 'react';
import { Navbar, Nav, Container, FormControl, Button, InputGroup } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    // Fetch data from API based on searchQuery
    try {
      const response = await fetch(`https://fakestoreapi.com/products?title=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Navbar bg="black" variant="dark" expand="lg" className="header">
      <Container>
        <Link to="/" className="navbar-brand brand-title">reCommerce</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/categories" className="nav-link">Categories</Link>
          </Nav>
          <InputGroup className="search-bar">
            <FormControl
              placeholder="Search products..."
              aria-label="Search products"
              aria-describedby="basic-addon2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-secondary" id="search-button" onClick={handleSearch}>
              Search
            </Button>
          </InputGroup>
          <Nav className="cart-icon">
            <Link to="/cart" className="nav-link">
              <FaShoppingCart size={20} />
              <span className="ms-1">Cart</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* Display search results if available */}
      {searchResults.length > 0 && (
        <div className="search-results">
          <h5>Search Results:</h5>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.title}</li>
            ))}
          </ul>
        </div>
      )}
    </Navbar>
  );
};

export default Header;
