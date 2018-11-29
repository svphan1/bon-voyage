import React from 'react';
import video from '../img/video.mp4';
import videowebm from '../img/video.webm';

const BgVideo = () => {
  return (
    <React.Fragment>
      <video className="bg-video__content" autoPlay muted loop>
        <source src={video} type="video/mp4"/>
        <source src={videowebm} type="video/webm"/>
        Your browser does not support the video tag.
      </video>
    </React.Fragment>
  )
};

export default BgVideo;
