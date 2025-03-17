import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import Image from '../image';
import logo from "../../assets/logo.png";
import Select from 'react-select';
import http from '../../http';

function NavBarComponent() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await http.get('/api/products/fetch');
        const products = response.data.message;

        const formattedOptions = products.map(product => ({
          value: product.Id,
          label: product.Name
        }));
        setAllProducts(formattedOptions);
        setOptions(formattedOptions);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchAllProducts();
  }, []);

  const handleSearchChange = (selectedOption) => {
    setSearchInput(selectedOption);

    if (selectedOption) {
      const filteredOptions = allProducts.filter(product =>
        product.label.toLowerCase().includes(selectedOption.label.toLowerCase())
      );
      setOptions(filteredOptions);
    } else {
      setOptions(allProducts);
    }
  };

  const handleItemClick = (selectedOption) => {
    console.log('Item clicked:', selectedOption);
    // You can add additional logic here, such as navigating to a product page
    window.location.href = `/products/item/${selectedOption.value}`;
  };

  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container fluid>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <Image image={logo} styles={{ width: "60px", height: "60px" }} className="d-inline-block align-top" />
        </Navbar.Brand>

        <div className={`${styles.searchBar} d-none d-lg-flex`}>
          <Select
            options={options}
            onChange={(selectedOption) => {
              handleSearchChange(selectedOption);
              handleItemClick(selectedOption); // Handle item click
            }}
            placeholder="Find pool supplies..."
            className={styles.searchSelect}
            value={searchInput}
            classNamePrefix="custom-select"
          />
          <Button variant="outline-success" className={styles.searchButton}>
            Search
          </Button>
        </div>

        <div className="d-flex d-lg-none align-items-center">
          <Form.Control
            type="search"
            placeholder="Find supplies..."
            aria-label="Search"
            className={styles.searchBar}
            value={searchInput?.label || ''}
            onChange={(e) => handleSearchChange({ value: e.target.value, label: e.target.value })}
          />
          <Navbar.Toggle aria-controls="navbarScroll" />
        </div>

        <Navbar.Collapse id="navbarScroll">
          <Nav className={styles.navbarMobileSub}>
            <Nav.Link className={styles.text} href="/">Home</Nav.Link>
            <Nav.Link className={styles.text} href="/contact">Contact</Nav.Link>
            <Nav.Link className={styles.text} href="/products">Products</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;