// Categories.jsx

import React, { useState, useEffect } from 'react';
import CategoriesCard from '../Components/CategoriesCard';
import CategoriesFilter from '../Components/CategoriesFilter';
import axios from 'axios';
import Header from '../Components/Header';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        if (selectedCategory) {
          const response = await axios.get(`https://fakestoreapi.com/products/category/${selectedCategory}`);
          setFilteredProducts(response.data);
        } else {
          // If no category is selected, show all products
          setFilteredProducts([]);
        }
      } catch (error) {
        console.error(`Error fetching products for category ${selectedCategory}:`, error);
      }
    };

    fetchProductsByCategory();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="Categories" id='categories'>
      <Header />
      <div className='Categories-Container'>
        <CategoriesFilter categories={categories} onCategoryChange={handleCategoryChange} />
        {selectedCategory && <CategoriesCard products={filteredProducts} />}
      </div>
    </div>
  );
};

export default Categories;
