// client/src/components/ProductDetail.jsx
import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import styles from './styles.module.css';

const ProductDetail = ({ product }) => {
    return (
        <Container className={styles.container}>
            <Row >
                <Col md={12} className="p-0">
                    <Card>
                        <Card.Header as="h5">{product.Name}</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={6}>
                                    <Image src={product.Image} fluid />
                                </Col>
                                <Col md={6}>
                                    <Card.Text><strong>Description:</strong> {product.Description}</Card.Text>
                                    <Card.Text><strong>Price:</strong> {product.Price}</Card.Text>
                                    <Card.Text><strong>Category:</strong> {product.Category}</Card.Text>
                                    <Card.Text><strong>Stock:</strong> {product.Stock}</Card.Text>
                                    <Card.Text><strong>SKU:</strong> {product.SKU}</Card.Text>
                                    <Card.Text><strong>Rating:</strong> {product.Rating}</Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;