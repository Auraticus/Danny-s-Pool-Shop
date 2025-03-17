import react, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../../components/Card';
import { Col, Container, Row } from 'react-bootstrap';
import http from '../../http';
import Swal from 'sweetalert2';
import NavBarComponent from '../../components/Navbar';
import ProductList from '../../components/Productlist';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';
import ProductDetail from '../../components/ProductView';

export default function ProductPage() {
    const [products, setProducts] = useState();
    const { id } = useParams();
    const fetchProducts = async() =>{
      try{
        const response = await http.get(`/api/products/fetch/${id}`);
        setProducts(response.data.items)
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
        {products && <ProductDetail product={products} />}
        <Footer />
      </>
    );
}