// CategoriesFilter.jsx

import React from 'react';
import { Form } from 'react-bootstrap';

const CategoriesFilter = ({ categories, onCategoryChange }) => {
  const handleCategoryChange = (e) => {
    onCategoryChange(e.target.value);
  };

  return (
    <div className="CategoriesFilter">
      <h2>Choose What You Need</h2>
      <Form.Control as="select" onChange={handleCategoryChange} className='Categories-Form'>
        <option value="">Categories :</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Form.Control>
    </div>
  );
};

export default CategoriesFilter;
