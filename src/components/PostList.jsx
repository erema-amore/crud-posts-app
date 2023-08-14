import React from 'react';
import { usePostContext } from '../context/PostContext';
import { useHistory } from 'react-router-dom';


function PostList() {
  const { posts } = usePostContext();

  // Теперь у вас есть доступ к состоянию "posts" из глобального контекста.
  // Вы можете использовать это состояние для отображения списка постов.

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          {/* Отображение информации о посте */}
        </div>
      ))}
    </div>
  );
}

export default PostList;
