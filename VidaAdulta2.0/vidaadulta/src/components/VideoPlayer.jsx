import React from 'react';
import './VideoPlayer.css'
import Video from '../assets/DireitosHumanos2.mp4'

const VideoPlayer = () => {
  return (
    <div className="video-container">
      <video
        src= { Video } 
        controls
        autoPlay
        loop
        style={{ width: '50%', height: 'auto' }}
      >
        Seu navegador não suporta vídeos.
      </video>
    </div>
  );
};

export default VideoPlayer;
