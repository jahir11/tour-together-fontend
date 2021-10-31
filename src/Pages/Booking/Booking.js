import React, { useEffect, useState } from 'react';
import { Form, Button} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css'

const Booking = () => {
    const {id} = useParams();
    const [service, setService] = useState({})
 
    useEffect(() => {
        fetch(`https://tour-together.herokuapp.com/booking/${id}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[id])
    const {user} = useAuth()
    const { register, handleSubmit, reset, } = useForm();
    const onSubmit = data => {
      fetch('https://tour-together.herokuapp.com/orders', {
        method: 'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(result => {
        if(result.insertedId){
          alert('Order processed Successfully')
          reset()
        }
      })
    };
    return (
        <div className="text-center my-5">
            <h2> Your Selected Service is: <br />
            <b>{service?.place_name}</b></h2>
            <p>Please give your more information for contact</p>
            <Form onSubmit={handleSubmit(onSubmit)} className="m-5 info-form mx-auto">
  <Form.Group className="mb-3" controlId="formBasicPlaceName">
    <Form.Control type="text" {...register("place_name")} placeholder="Place name" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Control type="text" {...register("name")} placeholder="name" value={user?.displayName} required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" {...register("email")} placeholder="email" value={user?.email} required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicNumber">
    <Form.Control type="number" {...register("number")} placeholder="contact number" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCity">
    <Form.Control type="text" {...register("city")} placeholder="city" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicAddress">
    <Form.Control type="text" {...register("address")} placeholder="address" required/>
  </Form.Group>
  <Button variant="info" type="submit" className="w-100" >
        Submit info
  </Button>
</Form>
        </div>
    );
};

export default Booking;