import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PostForm = ({ initialData }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [author, setAuthor] = useState(initialData?.author || '');
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { title, content, author };

    try {
      if (id) {
        // Update post
        await axios.put(`http://localhost:5008/api/posts/${id}`, postData);
      } else {
        // Create post
        const response = await axios.post('http://localhost:5008/api/posts', postData);
        if (response.status === 201) {
          alert('Post created successfully!');
          navigate('/');
        }
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to create/update post. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label>Content:</label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <label>Author:</label>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />

      <button type="submit">{id ? 'Update' : 'Create'} Post</button>
    </form>
  );
};

export default PostForm;