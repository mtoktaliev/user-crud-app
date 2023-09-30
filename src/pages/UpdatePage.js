import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../redux/userSlice";

const UpdatePage = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const { name, email } = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };

  return (
    <div className="container">
      <form className="mt-5" onSubmit={handleUpdate}>
        <h2>Update user</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="enter name"
            value={uname}
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
            value={uemail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn btn-info mt-3">Update</button>
      </form>
    </div>
  );
};

export default UpdatePage;
