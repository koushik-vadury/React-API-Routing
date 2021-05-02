import React from "react";
import "./users.css";
import { Link } from "react-router-dom";

const Users = (props) => {
  const { id, name, email } = props.user;
  return (
    <div className="users">
      <h4>{id}</h4>
      <h1>{name}</h1>
      <h3>{email}</h3>
      <p>
        ID:{" "}
        <Link to={`/about/${id}`}>
          <button className="btn btn-outline-warning btn-sm">
            Details Here
          </button>
        </Link>
      </p>
    </div>
  );
};

export default Users;
