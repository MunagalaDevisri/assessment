import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`/api/posts/${id}`);
      setPost(response.data);
    };
    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p><strong>Author:</strong> {post.author}</p>
    </div>
  );
};

export default PostDetails;