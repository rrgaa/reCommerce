// src/pages/Shop.js
import React from 'react';
import Header from '../Components/Header';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ProductList from '../Components/ProductList';
import Footer from '../Components/Footer';

const Shop = () => {
  return (
    <div className="shop-page" id='shop'>
      <Header />
      <div className="shop-banner">
        <Container>
          <h1 className="shop-heading">Explore Our Products</h1>
          <p className="shop-subheading">Discover a wide range of high-quality products.</p>
        </Container>
      </div>
      <ProductList />
      <Footer/>
    </div>
  );
};

export default Shop;
