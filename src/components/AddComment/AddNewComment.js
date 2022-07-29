import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import "./AddComment.css";
import axios from "axios";
const AddNewComment = () => {
  const [value, setValue] = useState({ name: "", email: "", body: "" });
  const navigate = useNavigate();
  const changeHandler = (e) => {
    setValue({...value , [e.target.name]:e.target.value});
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if(!value.name || !value.body || !value.email){
        alert('complete the form');
        return;
    }
    updateComment(value);
  }

  const updateComment = async (value) => {
    try{
        await axios.post('http://localhost:3001/comments' , {...value , postId : 1});
        navigate("/");
    }
    catch(err){
        console.log(err)
    }
  }
  return (
    <section className="add-comment">
        <h2>Add New Comment</h2>
      <form onSubmit={submitHandler} className="form-content">
        <label htmlFor="name">
          <p>Name :</p>
          <input  onChange={changeHandler} placeholder="Enter the name ..." id="name" name="name" />
        </label>
        <label htmlFor="email">
          <p>Email :</p>
          <input  onChange={changeHandler} placeholder="Enter the email ..." id="email" name="email" />
        </label>
        <label htmlFor="body">
          <p>Body :</p>
          <textarea
             onChange={changeHandler} placeholder="Enter the body ..."
            id="body"
            name="body"
          ></textarea>
        </label>
        <button className="form-btn">Add New Comment</button>
      </form>
    </section>
  );
};

export default AddNewComment;
