import React from 'react';
import { Link } from 'react-router-dom';
import { usePostContext } from '../context/PostContext';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function PostCard({ post }) {
  const { posts, setPosts } = usePostContext();

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${post.id}`);
      const updatedPosts = posts.filter(item => item.id !== post.id);
      setPosts(updatedPosts);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="card">
      {/* Отображение информации о посте */}
      <button onClick={handleDelete}>Удалить</button>
    </div>
  );
}

export default PostCard;
