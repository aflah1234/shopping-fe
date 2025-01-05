import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './Products';
import Footer from './footer';
import './App.css'
const App = () => {
  return (
    <Router>
      <div>
       
        <header style={styles.header}>
          <h1 style={styles.logo}>Shopping</h1>
          <nav>
            <ul style={styles.navList}>
              <li style={styles.navItem}><a href="/" style={styles.navLink}>Home</a></li>
              <li style={styles.navItem}><a href="/products" style={styles.navLink}>Products</a></li>
              <li style={styles.navItem}><a href="/login" style={styles.navLink}>Login</a></li>
            </ul>
          </nav>
        </header>
     
       
        <Routes>
          <Route path="/" element={<h2 style={{ textAlign: 'center', marginTop: '50px' }}>Welcome to Shopping!</h2>} />
          <Route path="/products" element={<h2 style={{ textAlign: 'center', marginTop: '50px' }}>Product Page (Coming Soon)</h2>}  />
          <Route path="/login" element={<h2 style={{ textAlign: 'center', marginTop: '50px' }}>Login Page (Coming Soon)</h2>} />
        </Routes>
        <Footer />
      </div>
    </Router>
    
    
  );
  
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#7723',
    padding: '10px 20px',
    borderBottom: '1px solid #ddd',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: 0,
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    gap: '15px',
  },
  navItem: {
    margin: 0,
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1rem',
    fontWeight: '500',
  },
};

export default App;
