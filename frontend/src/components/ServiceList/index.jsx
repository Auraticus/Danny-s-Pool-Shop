import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../Card';

export default function ServiceList({ services }) {

    return (
        <Container>
            <Row>
                {services && services.map((service, index) => (
                    <Col xs={12} md={4} key={index}>
                        <ProductCard
                            header={service.Name}
                            image={service.Image} // Use service.Image for the image URL
                            desc={service.Description}
                            location={service.Location}
                            footer={`Rating: ${service.Rating}, Price: ${service.Price}`}
                            id={service.Id}
                        />
                        <br />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}