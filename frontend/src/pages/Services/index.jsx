import react, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../../components/Card';
import { Col, Container, Row } from 'react-bootstrap';
import http from '../../http';
import Swal from 'sweetalert2';
import NavBarComponent from '../../components/Navbar';
import ProductList from '../../components/Productlist';
import Footer from '../../components/Footer';
import ServiceList from '../../components/ServiceList';

export default function ServicesPage() {
    const [services, setServices] = useState();
    const fetchProducts = async() =>{
      try{
        const response = await http.get('/api/services/fetch');
        setServices(response.data.message)
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
        <ServiceList services={services} />
        <Footer />
      </>
    );
}