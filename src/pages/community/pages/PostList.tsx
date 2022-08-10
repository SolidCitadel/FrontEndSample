import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Post from '../domain/Post'
import PostItem from '../components/PostItem'
import { Link } from 'react-router-dom'

function PostList() {
  const [postList, setPostList] = useState<Post[]>([])

  useEffect(() => {
    axios
      .get<Post[]>(process.env.REACT_APP_API_URL + '/community')
      .then(value => setPostList(value.data))
  }, [])

  console.log(postList)
  return (
    <div className='flex flex-col max-w-3xl w-10/12 space-y-3 mx-auto mt-3'>
      <header className='flex justify-between items-center'>
        <div className='text-2xl'>
          글 목록
        </div>
        <Link className='bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded text-white p-2'
              to='/community/new'>
          글 쓰기
        </Link>
      </header>
      <div className='flex flex-col divide-y divide-solid'>
        {postList.map((post) => <PostItem key={post.id} post={post} />)}
      </div>
    </div>
  )
}

export default PostList