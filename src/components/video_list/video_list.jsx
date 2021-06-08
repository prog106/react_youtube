import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = (props) => {
    const display = (props.selectedVideo) ? styles.lists : styles.grid;
    return (
        <ul className={`${styles.videolists} ${display}`}>
            {props.videos.map(video => <VideoItem key={video.id} video={video} onVideoClick={props.onVideoClick} selectedVideo={props.selectedVideo} />)}
        </ul>
    )
}

export default VideoList;
