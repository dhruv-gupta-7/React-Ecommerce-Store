import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useProductContext } from './ProductsProvider';
import { useSortingContext } from './SortingProvider';
import DeleteIcon from '@mui/icons-material/Delete'; 
import '../Css/HomePage.css';

const HomePage = () => {
  const { products: originalProducts, isLoading, deleteProduct } = useProductContext(); 
  const { sortOrder } = useSortingContext();
  const [products, setProducts] = useState(originalProducts);

  useEffect(() => {
    let sortedProducts = [...originalProducts];
    if (sortOrder === 'low-to-high') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high-to-low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  }, [sortOrder, originalProducts]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleDeleteClick = (productId) => {
    deleteProduct(productId); 
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`} className="product-link">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </Link>
          <button onClick={() => handleDeleteClick(product.id)}>
            <DeleteIcon />
          </button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
