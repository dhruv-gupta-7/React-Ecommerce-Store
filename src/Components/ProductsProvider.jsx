import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('../products.json');
        setProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ products, isLoading, addProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
