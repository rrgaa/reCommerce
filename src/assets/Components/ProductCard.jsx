import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaCartPlus, FaHeart, FaShoppingBag } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const { title, price, category, image } = product;

  return (
    <Card className="product-card">
      <Card.Img variant="top" src={image} alt={title} className="product-image" />
      <Card.Body>
        <Card.Title className="product-title">{title}</Card.Title>
        <Card.Text className="product-text">
          <strong>Price:</strong> ${price}
        </Card.Text>
        <Card.Text className="product-text">
          <strong>Category:</strong> {category}
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
  );
};

export default ProductCard;
