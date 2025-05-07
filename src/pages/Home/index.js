import React, { useEffect, useState } from 'react';
import './home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch posts');
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="title">Welcome Home</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <div className="card-grid">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <h2 className="card-title">{post.title}</h2>
            <p className="card-body">{post.body.substring(0,100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;