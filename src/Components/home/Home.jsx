import React, { useEffect, useState } from "react";

import Users from "../users/Users";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {users.map((user) => (
        <Users user={user} key={user.id}></Users>
      ))}
    </>
  );
};

export default Home;
