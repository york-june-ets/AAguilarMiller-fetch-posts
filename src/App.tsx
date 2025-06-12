import { useEffect, useState } from 'react';
import './App.css';
import { posts as initialPosts } from './fetch/fetch-data';

function App() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const waitForPosts = async () => {
      await new Promise((res) => setTimeout(res, 500));
      setPosts([...initialPosts]); 
    };

    waitForPosts();
  }, [posts]);

  return (
    <div className="App">
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

