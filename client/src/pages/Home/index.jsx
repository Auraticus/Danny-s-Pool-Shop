import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import NavBarComponent from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './styles.module.css';
import Swal from 'sweetalert2';
import http from '../../http';

function Home() {
  const [products, setProducts] = useState();
  const fetchProducts = async() =>{
    try{
      const response = await http.get('/api/products/fetch');
      console.log("response: ",response.data.messagec)
      setProducts(response.data.message)
    }catch(error){
      Swal.fire({
        icon: 'error',
        title: 'Account Not Activated',
        text: 'Your account is not activated. Please check your email for the activation link.',
      });
    }
  }

  useEffect(() =>{
    fetchProducts();
  },[])

  return (
    <div className={styles.pageContainer}>
      <NavBarComponent />
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Welcome to Danny's Pool Shop</h1>
          <p className={styles.subtitle}>
            Your one-stop destination for all your pool maintenance needs. We provide top-quality pool supplies, chemicals, and expert advice.
          </p>
          {products && products.map((product) => {
            return(
              <div key={product.Name}>
                <h4>{product.Name}</h4>
                <p>{product.Description}</p>
                <p>{product.Stock}</p>
                <p>{product.SKU}</p>
                <p>{product.Price}</p>
              </div>
            )
          })}
          <div className={styles.ctaButtons}>
            <Button variant="primary" size="lg" className={styles.ctaButton}>
              Shop Now
            </Button>
            <Button variant="outline-primary" size="lg" className={styles.ctaButton}>
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