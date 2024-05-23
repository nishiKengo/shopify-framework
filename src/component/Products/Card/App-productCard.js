// src/App.js
import React from 'react';
import ProductCard from './ProductCard'
import './product-card.css'

const App = () => {
  return (
    <>
      <h1>おすすめ商品</h1>
      <div className='product-grid'>
        {Array.from({length: 8}).map((_, index) => (
          <ProductCard key={index}/>
        ))}
      </div>
    </>
  );
};

export default App;
