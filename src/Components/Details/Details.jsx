import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./details.css";

const Details = () => {
  const { id } = useParams();
  const [users, setUsers] = useState({});
  const { name, username, email, phone, website } = users;
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [id]);
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>UserName: {username}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>

      <Link to="/">
        <button className="btn btn-outline-success" id="btn">
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default Details;
