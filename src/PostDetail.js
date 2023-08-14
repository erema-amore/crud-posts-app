import React from 'react';
import { useParams } from 'react-router-dom';
import { usePostContext } from '../context/PostContext';

function PostDetail() {
  const { id } = useParams();
  const { posts } = usePostContext();

  const post = posts.find(item => item.id === parseInt(id));

  if (!post) {
    return <div>Пост не найден</div>;
  }

  return (
    <div>
      {/* Отображение детализации поста */}
    </div>
  );
}

export default PostDetail;
