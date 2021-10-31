import React, { useEffect, useState } from 'react';
import { AiOutlineClockCircle } from "react-icons/ai";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = () => {
    const {id} = useParams()
    const [service, setService] = useState({})
 
    useEffect(() => {
        fetch(`https://tour-together.herokuapp.com/service/${id}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    
    const {_id,image, place_name, description, cost , day} = service
    return (
         <div>
    <div className="card mb-3 m-5 card-width mx-auto">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={image} className="img-fluid rounded-start h-100" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h3 className="card-title">{place_name}</h3>
        <p className="card-text text-black-50">{description}</p>
        <div className="d-flex justify-content-between">
        <p className="card-text"><h2 className="text-white bg-info px-3 d-inline"><AiOutlineClockCircle className="mb-1 text-black"/> {day} Days</h2></p>
        <p className="card-text"><h2 className="text-white bg-info px-3 d-inline">${cost}.00</h2></p>
        </div>
        <div className="text-center">
            <Link to={`/booking/${_id}`}>
            <button className="btn btn-outline-info text-dark px-5 my-2">Place order</button>
            </Link>
        </div>
      </div>
    </div>
  </div>
</div>
            <div className="text-center m-5">
                <Link to="/home"><button className="btn btn-outline-danger px-5">Back To Home</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetail;