import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../Card';

export default function ProductList({ products }) {

    return (
        <Container>
            <Row>
                {products && products.map((product, index) => (
                    <Col xs={12} md={4} key={index}>
                        <ProductCard
                            header={product.Name}
                            image={product.Image} // Use product.Image for the image URL
                            desc={product.Description}
                            footer={`Rating: ${product.Rating}, Price: ${product.Price}`}
                            id={product.Id}
                        />
                        <br />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}