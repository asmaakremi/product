import React, { useState } from 'react';
import ProductsSummary from './ProductsSummary';
import SearchProducts from './SearchProducts';
import AvailableProducts from './AvailableProducts';

const Products = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSearch = (name, price, quantity) => {
    setName(name);
    setPrice(price);
    setQuantity(quantity);
  };
  

  return (
    <>
      <ProductsSummary />
      <SearchProducts onSearch={handleSearch} />
      <AvailableProducts name={name} price={price} quantity={quantity} />
    </>
  );
};

export default Products;
