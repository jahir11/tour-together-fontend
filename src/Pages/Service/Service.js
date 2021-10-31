import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { CgDetailsMore } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {place_name, image,description, _id} = props?.service
    return (
        <div>
             <Col>
      <Card className="text-center p-3 shadow-lg">
        <Card.Img variant="top" src={image} className="service-img"/>
        <Card.Body>
          <Card.Title>{place_name}</Card.Title>
          <Card.Body>{description.slice(0, 150)}</Card.Body>
          <Link className="text-warning fw-bold" to={`/service/${_id}`}>Book Now <CgDetailsMore/></Link>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Service;