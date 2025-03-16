import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Page2 = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts')
      .then(({ data }) => setPosts(data.slice(0, 5)));
  }, []);

  return (
    <div className="container">
      <h1>Page 2</h1>
      <button className="btn" onClick={() => navigate(-1)}>Go back</button>
      {posts.map(item => <h1 key={item.id}>{item.title}</h1>)}
    </div>
  );
}

export default Page2;
