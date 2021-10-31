import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';


const Blogs = () => {
    
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
      fetch('https://tour-together.herokuapp.com/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])
  

    return (
        <div>
            <div className="my-5 p-5">
            <div className="mb-5">
            <h1><b>BLOG</b></h1>
            </div>
            <Row xs={1} md={2} className="g-4">
            {
                blogs.map(blog => <Blog key={blog._id} blog={blog}/>)
            }
            </Row>
        </div>
        </div>
    );
};

export default Blogs;