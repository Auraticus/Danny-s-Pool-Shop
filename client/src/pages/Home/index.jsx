import React from 'react';
import { Container, Button } from 'react-bootstrap';
import NavBarComponent from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './styles.module.css';

function Home() {
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