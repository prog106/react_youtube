import React, { useCallback, useEffect, useState } from 'react';
import Navbar from './components/navbar/navbar';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';
import VideoDetail from './components/video/video_detail';

const App = ({ youtube }) => { // props.youtube
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        youtube.mostPopular().then(items => setVideos(items));
    }, [youtube]);
    const handleSubmit = useCallback((q) => {
        youtube.searching(q).then((items) => {
            setVideos(items)
            setSelectedVideo(null);
        });
    }, [youtube]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const handleVideo = (id) => {
        setSelectedVideo(id);
    }
    return (
        <div className={styles.wrap}>
            <Navbar onSubmit={handleSubmit} />
            <div className={styles.contents}>
                {
                    selectedVideo && <VideoDetail selectedVideo={selectedVideo} />
                }
                <VideoList videos={videos} onVideoClick={handleVideo} selectedVideo={selectedVideo} />
            </div>
        </div>
    )
}

export default App;
