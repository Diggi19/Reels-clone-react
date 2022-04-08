import React, { useRef } from 'react'
import './video.css'
import video from '../../videos/pexels-ekrulila-7154668.mp4'
import VideoHeader from './VideoHeader'
import VideoFooter from './VideoFooter'
import db from '../../../firebase'
const Video = () => {
    const[isVideoPlaying,setisVideoPlaying] = React.useState(false)

    // ref is used as a pointer to target a certain element
    const videoRef = useRef(null)

    const onVideoPress=()=>{
        if (isVideoPlaying) {
            // stop video
            videoRef.current.pause()
            setisVideoPlaying(false)
        }else{
            // start video
            videoRef.current.play()
            setisVideoPlaying(true)
        }
    }

    React.useEffect(()=>{
        db.collection('Reels').on
    }),[]
    return (
        <div className="video__container">
            <div className="video__body">
                <div className="video__header">
                    <video
                        ref={videoRef}
                        onClick={onVideoPress}
                        className="video" src={video} alt="video" autoPlay muted   loop  id="myVideo"></video>
                </div>

            </div>
        </div>
    )
}

export default Video
