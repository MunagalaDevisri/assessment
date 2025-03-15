import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CreatePost from './Pages/CreatePost';
import EditPost from './Pages/EditPost';
import Home from './Pages/Home';
import PostDetails from './Pages/PostDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  );
};

export default App;