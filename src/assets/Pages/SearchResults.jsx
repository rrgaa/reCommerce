import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaShoppingBag } from 'react-icons/fa';

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      <h5>Search Results:</h5>
      <div className="ProductList">
        {results.map((result) => (
          <Card key={result.id} className="product-card">
            <Card.Img variant="top" src={result.image} alt={result.title} className="product-image" />
            <Card.Body>
              <Card.Title className="product-title">{result.title}</Card.Title>
              <Card.Text className="product-text">
                <strong>Price:</strong> ${result.price}
              </Card.Text>
              <Card.Text className="product-text">
                <strong>Category:</strong> {result.category}
              </Card.Text>
              <div className="product-buttons">
                <Button variant="dark" className="product-button">
                  <FaShoppingBag />
                  <span className="button-label">Shop</span>
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
