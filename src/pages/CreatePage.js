import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate("/");
  };

  return (
    <div className="container">
      <form className="mt-5" onSubmit={handleSubmit}>
        <h2>Add new user</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn btn-info mt-3">Submit</button>
      </form>
    </div>
  );
};

export default CreatePage;
