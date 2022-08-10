import React from 'react';
import {useParams} from "react-router-dom";

function PostDetail() {
  const { postId } = useParams()
  return (
    <div className="m-3">{postId}</div>
  );
}

export default PostDetail;