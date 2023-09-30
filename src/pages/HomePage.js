import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/userSlice";

const HomePage = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };
  return (
    <div className="container">
      <h2 className="mt-5">CRUD приложение</h2>
      <Link to="/create" className="btn btn-success my-3">
        Создать +
      </Link>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/edit/${user.id}`} className="btn btn-primary me-2">
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
