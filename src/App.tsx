import { useEffect, useState } from 'react';
import './App.css';
import { posts as initialPosts } from './fetch/fetch-data';
import { PostsInterface } from './Interfaces/posts';

function App() {
  const [posts, setPosts] = useState<PostsInterface[]>([]);

  useEffect(() => {
    const waitForPosts = async () => {
      await new Promise((res) => setTimeout(res, 500));
      setPosts([...initialPosts]); 
    };

    waitForPosts();
  }, []);
console.log(posts)
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

