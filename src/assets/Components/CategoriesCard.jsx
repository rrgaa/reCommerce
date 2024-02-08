// CategoriesCard.jsx

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaCartPlus, FaHeart, FaShoppingBag } from 'react-icons/fa';

const CategoriesCard = ({ products }) => {
  return (
    <div className="CategoriesCard">
      <h2>Products in Category:</h2>
      <div className="ProductList">
        {products.map((product) => (
          <Card key={product.id} className="product-card">
            <Card.Img variant="top" src={product.image} alt={product.title} className="product-image" />
            <Card.Body>
              <Card.Title className="product-title">{product.title}</Card.Title>
              <Card.Text className="product-text">
                <strong>Price:</strong> ${product.price}
              </Card.Text>
              <Card.Text className="product-text">
                <strong>Category:</strong> {product.category}
              </Card.Text>
              <div className="product-buttons">
                <Button variant="dark" className="product-button">
                  <FaShoppingBag />
                  <span className="button-label">Shop</span>
                </Button>
                <Button variant="dark" className="product-button">
                  <FaCartPlus />
                  <span className="button-label">Add to Cart</span>
                </Button>
                <Button variant="dark" className="product-button">
                  <FaHeart />
                  <span className="button-label">Add to Favorites</span>
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CategoriesCard;
