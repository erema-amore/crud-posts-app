import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'; 



function PostForm() {
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/posts ', { body, author }); 
      console.log('Post added:', response.data);

      
      history.push('/');
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Body
          </label>
          <textarea
            className="form-control"
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Post
        </button>
      </form>
    </div>
  );
}

export default PostForm;
