import React from 'react'
import AddPost from '../addpost/AddPost';
import Post from '../post/Post'
import './postpane.css';

export default function PostPane() {
  return (
    <div className='postPaneBox'>
      <AddPost/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}
