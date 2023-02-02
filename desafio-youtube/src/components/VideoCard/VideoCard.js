import React from 'react';
import './styles.css';




const VideoCard = ({ video }) => {
  return (
    <>
      <img
        className='thumb'
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className='video-info-container'>
        <div className='video-info'>
          <h4>
            {video.snippet.title.length > 30
              ? video.snippet.title.substring(0, 40) + '...'
              : video.snippet.title}
          </h4>

          
        </div>
      </div>
    </>
  );
};

export default VideoCard;
