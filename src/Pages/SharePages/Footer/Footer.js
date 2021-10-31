import React from 'react';
import { FormControl, InputGroup, Button, Row, Col } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-bg mt-5">
<div className="container ">
            <Row className="d-md-flex py-5">
                <Col className="text-white" sm={12} md={6}>
                    <b>
                    <h1>SUBMIT YOUR NEWSLETTER</h1>
                    <p>Register now! We will send you best offers for your trip.</p>
                    </b>
                </Col>
                <Col className="my-3 ">
                <InputGroup className="mb-3">
    <FormControl
      placeholder="Your email"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button className="mx-3" variant="outline-light" id="button-addon2">
      Button
    </Button>
  </InputGroup>
                </Col>
                
            </Row>
            <hr />
            <div className="d-md-flex justify-content-lg-evenly py-5">
            <h3><b><span className="text-white">TOUR</span> -TOGETHER</b></h3>
            <small className="text-muted p-2">Copyright 2021 Tour-Together. All Right Reserved</small>
            </div>
        </div>
        </div>
        
    );
};

export default Footer;