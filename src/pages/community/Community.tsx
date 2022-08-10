import React from 'react';
import {Route, Routes} from "react-router-dom";
import PostList from "./pages/PostList";
import NewPost from "./pages/NewPost";
import PostDetail from "./pages/PostDetail";

function Community() {
  return (
    <Routes>
      <Route path='/' element={<PostList/>}/>
      <Route path='/new' element={<NewPost/>}/>
      <Route path='/post/:postId' element={<PostDetail/>}/>
    </Routes>
  );
}

export default Community;