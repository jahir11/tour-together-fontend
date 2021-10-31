import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Blog.css'
const Blog = (props) => {
    const {name, title, description, image} = props?.blog
    return (
        <div>
            <Col>
      <Card className="text-center p-3 shadow-lg">
        <Card.Img variant="top" src={image} className="blog-img"/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Title><small>Author name:{name}</small></Card.Title>

          <Card.Body>{description.slice(0, 220)}</Card.Body>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Blog;