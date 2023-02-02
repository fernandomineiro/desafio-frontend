import React from 'react';
import { timeSince } from '../../utils/time';
import { Link } from 'react-router-dom';
import VideoCard from '../VideoCard/VideoCard';
import { LikeIcon, DislikeIcon } from '../Icons/Icons';
import './styles.css';



const VideoDetail = ({ video, videos, handleVideoSelect }) => {
  const selectedVideoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
 
  return (
    <div className='board'>
      <div className='video-container'>
        <div className='video'>
          <iframe src={selectedVideoUrl} allowFullScreen title='Video player' />
        </div>

        <div className='video-info'>
          <h3>{video.snippet.title}</h3>

          <div className='video-info-stats'>
            <p>
              <span>{video.snippet.views} vizualizações</span> <span>•</span>{' '}
              <span>{timeSince(video.snippet.publishTime)} atrás</span>
            </p>

            <div className='likes-dislikes flex-row'>
              <span className='flex-row like'>
                <LikeIcon onClick={''} />{' '}
                <span>{video.snippet.likesCount}</span>
              </span>
              <span
                className='flex-row dislike'
                style={{ marginLeft: '1.5rem' }}
              >
                <DislikeIcon onClick={''} />{' '}
                <span>{video.snippet.dislikesCount}</span>
              </span>
            </div>
          </div>
        </div>

        <div className='channel-info-description'>
          <p>{video.snippet.description}</p>
        </div>
      </div>
      <div className='related-videos'>
        <h3 style={{ marginBottom: '1rem' }}></h3>
        {videos
          .filter((vid) => vid.id !== video.id)
          .slice(0, 3)
          .map((video) => (
            <Link key={video.id} onClick={ () => handleVideoSelect(video)}>
            <VideoCard key={video.id} video={video} />
          </Link>
          ))}
      </div>
    </div>
  );
};

export default VideoDetail;
