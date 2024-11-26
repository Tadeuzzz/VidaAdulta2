import React from 'react';
import './VideoPlayer2.css';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="video-container">
      <video
        src={videoUrl}
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
