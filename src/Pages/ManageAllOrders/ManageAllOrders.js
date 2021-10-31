import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://tour-together.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        if(proceed){
            const url = `https://tour-together.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('deleted successfully');
                const remainingOrder = orders.filter(order => order._id !== id);
                setOrders(remainingOrder)
            }
        })
        }
    }
    return (
        <div className="container text-center">
            <h1>Order list</h1>
            <Table striped bordered hover size="sm" >
            <thead>
                <tr>
                
                <th>Name</th>
                <th>Email</th>
                <th>Place_Name</th>
                <th>Contact</th>
                <th>Cancel order</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map(order => <tr key={order._id}>
                        <td>{order.name}</td>
                        <td>{order.email}</td>
                        <td>{order.place_name}</td>
                        <td>{order.number}</td>
                        <td><button onClick={() => handleDelete(order._id)} className="btn btn-outline-danger px-md-5"><AiOutlineDelete/></button></td>
                    </tr> )
                }
            </tbody>
        </Table>
        </div>
    );
};

export default ManageAllOrders;