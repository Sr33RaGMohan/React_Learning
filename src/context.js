import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <ProductContext.Provider value={{ products, setProducts, addProduct }}>
      {props.children}
    </ProductContext.Provider>
  );
};