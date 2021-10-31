import React from 'react';
import { useForm } from 'react-hook-form';
import './AddNewBlog.css'

const AddNewBlog = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    fetch('https://tour-together.herokuapp.com/addblog', {
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
      if(result.insertedId){
        alert('Blog create Successfully')
        reset()
      }
    })
  };
    return (
        <div className="d-flex justify-content-center">
            <div>
            <h1>Create a blog and share <br />
            your tour experience </h1>
            <form className=" blog-form" onSubmit={handleSubmit(onSubmit)}>

            <input {...register("name")} placeholder="Your name"/>
            <br />
            <input {...register("title")} placeholder="place-name"/>
            <br />
            <input {...register("image")} placeholder="Tour image"/>
            <br />
            <textarea {...register('description')} placeholder="description"/>
            <br />
            <input type="submit" className="btn btn-info" />
            </form>
            </div>
            
        </div>
    );
};

export default AddNewBlog;