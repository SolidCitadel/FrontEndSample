import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function NewPost() {
  const navigate = useNavigate()

  const [authorId, setAuthorId] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLElement>) => {
    event.preventDefault()
    await axios.post(process.env.REACT_APP_API_URL + '/community/add', {
      authorId, title, content,
    })
    navigate('/community')
  }

  return (
    <div className='mx-auto my-3 w-1/2 space-y-3'>
      <div className='text-center'>
        새 글 쓰기
      </div>
      <form className='flex flex-col border-2 p-3 space-y-1'
            action={process.env.REACT_APP_API_URL + '/community/add'} method='post'
            onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 gap-1'>
          <label>아이디</label>
          <input className='border' type='text' name='authorId'
                 value={authorId} onChange={(e) => setAuthorId(e.target.value)} />
          <label>제목</label>
          <input className='border' type='text' name='title'
                 value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <textarea className='border' name='content' rows={10}
                  value={content} onChange={(e) => setContent(e.target.value)} />
        <button className='bg-blue-400 rounded ml-auto p-2 text-white' type='submit'>
          글 쓰기
        </button>
      </form>
    </div>
  )
}

export default NewPost