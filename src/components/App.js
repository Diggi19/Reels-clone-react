import React from 'react'
import '../style.css'
import Video from './items/video_Container/Video'
const App = () => {
   
    return (
        <div className="app__container">
            <div className="app__body">
                <div className="app__header">
                    <div className="image__holder"><img src="https://th.bing.com/th/id/R.950464fcbb88221fba2d72bd8e997118?rik=8t0QSyLs40dupQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2finstagram-logo-eps-png-instagram-logo-1784.png&ehk=ZLn0UdAH6aoX9f2NvarOxzeDX5DAdAIpqOa%2f2s65Y7I%3d&risl=&pid=ImgRaw&r=0" alt="head-logo"/></div>
                    <h3>Reels</h3>
                </div>
                <div className="app__video">
                    <Video/>
                    <Video/>
                    <Video/>
                    
                </div>
            </div>
        </div>
    )
}

export default App
