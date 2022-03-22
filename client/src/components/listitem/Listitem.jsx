import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import React from 'react'
import './listitem.scss'
import {useState} from "react"
import Video from '../../assets/video1.m4v'

const Listitem = ({index}) => {
    const [isHovered,setIsHovered] =useState(false);
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
  return (

    <div className='listItem'
    style={{left:isHovered && index * 225 -50 + index * 2.5}}
    onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>


        <img src="https://images.pexels.com/photos/5662857/pexels-photo-5662857.png?auto=compress&cs=tinysrgb&h=650&w=940"alt=""/>

        { isHovered && (
                <>
        <video src={Video} autoPlay={true}loop/>

        <div className="itemInfo">
            <div className="icons">
                <PlayArrow className="icon"/>
                <Add className="icon"/>
                <ThumbUpAltOutlined className="icon"/>
                <ThumbDownOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
                <span>2 hour</span>
                <span className="limit">+18</span>
                <span>2002</span>
            </div>
            <div className="desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas saepe ex a doloremque repellendus
            </div>
            <div className="genre">Comedy</div>
        </div>
                
        </>

        )}
       
    </div>
  )
}

export default Listitem