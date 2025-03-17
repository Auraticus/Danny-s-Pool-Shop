import React from 'react';
import styles from './styles.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>Contact Us</h4>
          <p>📞 <a href="tel:+27114571234">(011) 457-1234</a></p>
          <p>📧 <a href="mailto:info@dannyspoolshop.com">info@dannyspoolshop.com</a></p>
        </div>
        <div className={styles.footerSection}>
          <h4>Hours</h4>
          <p>Mon-Fri: 9am - 4pm</p>
          <p>Sat: 10am - 2pm</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Location</h4>
          <p>123 Pool Street</p>
          <p>Johannesburg, South Africa</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2025 Danny's Pool Shop. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 