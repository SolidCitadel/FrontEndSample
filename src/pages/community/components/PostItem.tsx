import React from 'react'
import Post from '../domain/Post'
import { Link } from 'react-router-dom'

type PostItemProps = {
  post: Post
}

function PostItem({ post }: PostItemProps) {
  return (
    <Link className="p-1" to={`/community/post/${post.id}`}>{post.title}</Link>
  )
}

export default PostItem