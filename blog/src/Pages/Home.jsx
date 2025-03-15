import React from 'react';
import Navbar from '../components/Navbar';
import PostList from '../components/PostList';

const Home = () => {
  return (
    <div>
      <Navbar />
      <PostList />
    </div>
  );
};

export default Home;