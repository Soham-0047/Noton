import { ArrowBackOutlined } from '@mui/icons-material'
import React from 'react'
import "./watch.scss"
import Video1 from "../../assets/video1.m4v"

const Watch = () => {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        <video className='video' autoPlay progress controls src={Video1}/>

        
    </div>
  )
}

export default Watch