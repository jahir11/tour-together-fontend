import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { AiOutlineLogout } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'


const Header = () => {
  const {user, handleLogOut} = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light" className="header p-3">
  <Container >
  <Navbar.Brand href=""><b><span className="text-white">TOUR</span>-TOGETHER</b></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/services">services</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
      <NavLink to="/about">About us</NavLink>
      {
        user?.email && <NavLink to="/orders">Manage All Orders</NavLink>
      }
      {
        user?.email && <NavLink to='/addblog'>Add New Blog</NavLink>
      }
    </Nav>
    <Nav className=" text-center ms-auto text-white">
      {
        user?.email && <h6 className="text-black mx-2 mt-2">{user.displayName}</h6>
      }
      {
        user?.email ? <Button className=" btn-dark mx-auto" onClick={handleLogOut}><AiOutlineLogout/></Button> :
        <NavLink className="mx-2" to="/login">Login</NavLink>
      }
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;