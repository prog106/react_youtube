import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/navbar';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';
import VideoDetail from './components/video/video_detail';

const App = (props) => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        props.youtube.mostPopular().then(items => setVideos(items));
    }, []);
    const handleSubmit = (q) => {
        props.youtube.searching(q).then(items => setVideos(items));
    }
    const [selectedVideo, setSelectedVideo] = useState(null);
    const handleVideo = (id) => {
        setSelectedVideo(id);
    }
    return (
        <div className={styles.wrap}>
            <Navbar onSubmit={handleSubmit} />
            {
                selectedVideo && <VideoDetail selectedVideo={selectedVideo} />
            }
            <VideoList videos={videos} onVideoClick={handleVideo} />
        </div>
    )
}

export default App;
