import React from 'react';
import Navbar from '../components/Navbar';
import PostForm from '../components/PostForm';

const CreatePost = () => {
  return (
    <div>
      <Navbar />
      <h1>Create New Post</h1>
      <PostForm />
    </div>
  );
};

export default CreatePost;