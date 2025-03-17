// CustomCard.js
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const ProductCard = ({ header, image, desc,location, footer, id }) => {
    // Split the footer string into parts if needed
    const footerParts = footer ? footer.split(', ') : [];

    const handleNavigate = () =>{
        window.location.href = `/products/item/${id}`;
    }

    return (
        <Card style={{ width: '18rem' }} on onClick={() => handleNavigate()}>
            {image && <Card.Img variant="top" src={image} />}
            <Card.Body>
                {header && <Card.Header>{header}</Card.Header>}
                <Card.Text>{desc}</Card.Text>
                <Card.Text>{location}</Card.Text>
            </Card.Body>
            {footer && (
                <Card.Footer>
                    <Row>
                        {footerParts.map((part, index) => (
                            <Col xs={6} key={index}>{part}</Col>
                        ))}
                    </Row>
                </Card.Footer>
            )}
        </Card>
    );
};

export default ProductCard;