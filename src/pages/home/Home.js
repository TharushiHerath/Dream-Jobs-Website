import React from 'react'
import './home.css'
import Navbar from '../../components/navigation/Navbar'
import LeftPane from '../../components/leftpane/LeftPane'
import PostPane from '../../components/postpane/PostPane'
import RightPane from '../../components/rightpane/RightPane'


export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="bottomContainer">
        <LeftPane/>
        <PostPane/>
        <RightPane/>
      </div>
    </div>
  )
}
