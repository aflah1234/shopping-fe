import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css'
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://shopping-be-zo79.onrender.com/products'); 
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      {products.map((product) => (
        <div key={product._id} style={{ border: '1px solid #ddd', borderRadius: '8px', width: '200px', padding: '10px', textAlign: 'center' }}>
          <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
          <h3 style={{ fontSize: '1.1rem', margin: '10px 0' }}>{product.title}</h3>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>{product.description}</p>
          <p style={{ fontWeight: 'bold' }}>Price: ${product.price}</p>
          <button style={{ backgroundColor: '#ffce00', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Add to cart
          </button>
        </div>
      ))}
    </div>

  );
};

export default Products;
