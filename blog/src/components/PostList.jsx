import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts from the backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5008/api/posts');
        setPosts(response.data); // Update the posts state with the fetched data
      } catch (err) {
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };
    fetchPosts();
  }, []);

  // Handle post deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5008/api/posts/${id}`);
      setPosts(posts.filter((post) => post._id !== id)); // Remove the deleted post from the state
    } catch (err) {
      console.error('Error deleting post:', err);
    }
  };

  // Show a loading message while fetching data
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p><strong>Author:</strong> {post.author}</p>
            <Link to={`/edit/${post._id}`}>Edit</Link>
            <button onClick={() => handleDelete(post._id)}>Delete</button>
            <Link to={`/post/${post._id}`}>View Details</Link>
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
};

export default PostList;