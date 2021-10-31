
import React, { useEffect, useState } from 'react';
import { Row, Button } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://tour-together.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    
    return (
        <div className="my-5 p-5">
            <div className="mb-5">
            <h3 className="text-white p-2 bg-warning d-inline" >FEATURED TOUR</h3>
            <h1 className="fw-bold mx-2 mt-4">OUR LATEST TOURS</h1>
            </div>
            <Row xs={1} md={3} className="g-4">
            {
                services.map(service => <Service key={service._id} service={service}/>)
            }
            </Row>
        </div>
    );
};



export default Services;