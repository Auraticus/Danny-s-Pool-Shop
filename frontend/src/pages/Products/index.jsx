import react, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../../components/Card';
import { Col, Container, Row } from 'react-bootstrap';
import http from '../../http';
import Swal from 'sweetalert2';
import NavBarComponent from '../../components/Navbar';
import ProductList from '../../components/Productlist';
import Footer from '../../components/Footer';

export default function Homepage() {
    const [products, setProducts] = useState();
    const fetchProducts = async() =>{
      try{
        const response = await http.get('/api/products/fetch');
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
      <>
        <NavBarComponent />
        <ProductList products={products} />
        <Footer />
      </>
    );
}