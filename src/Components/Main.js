import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Main.css";

function Main() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching users');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="App">
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{width:"20%",display:"inline-block",margin:"5px"}}>
            <h2>{user.name}</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
