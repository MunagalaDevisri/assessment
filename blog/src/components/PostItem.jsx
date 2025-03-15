import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post, onDelete }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p><strong>Author:</strong> {post.author}</p>
      <Link to={`/edit/${post._id}`}>Edit</Link>
      <button onClick={() => onDelete(post._id)}>Delete</button>
      <Link to={`/post/${post._id}`}>View Details</Link>
    </div>
  );
};

export default PostItem;