import React, { useEffect, useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import NavBarComponent from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './styles.module.css';
import Swal from 'sweetalert2';
import http from '../../http';
import ProductCard from '../../components/Card';

function Home() {
  const [products, setProducts] = useState();
  const fetchProducts = async () => {
    try {
      const response = await http.get('/api/products/fetch');
      console.log("response: ", response.data.messagec)
      setProducts(response.data.message)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Product Not Found',
        text: 'Your Product Could Not Be Found Please Use The Contact Us Page For Assistance.',
      });
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div className={styles.pageContainer}>
      <NavBarComponent />
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Welcome to Danny's Pool Shop</h1>
          <p className={styles.subtitle}>
            Your one-stop destination for all your pool maintenance needs. We provide top-quality pool supplies, chemicals, and expert advice.
          </p>
          <div className={styles.ctaButtons}>
            <Button variant="primary" size="lg" className={styles.ctaButton}>
              Shop Now
            </Button>
            <Button variant="outline-primary" size="lg" className={styles.ctaButton} onClick={() => window.location.href = "/services"}>
              View Services
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home; 