import React from 'react'
import './VideoHeader.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
const VideoHeader = () => {
    return (
        <div className="header__container">
            <ArrowBackIosIcon className="header__icon"/>
            <h3>Reels</h3>
            <CameraAltIcon className="header__icon"/>
            
        </div>
    )
}

export default VideoHeader
