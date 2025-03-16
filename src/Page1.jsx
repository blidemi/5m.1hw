import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => setUsers(data));
  }, []);

  return (
    <div className="container">
      <h1>Page 1</h1>
      <button className="btn" onClick={() => navigate(-1)}>Go back</button>
      {users.map(item => <h1 key={item.id}>{item.name}</h1>)}
    </div>
  );
}

export default Page1;
