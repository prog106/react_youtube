import React, { memo, useEffect, useState } from 'react';
import Navbar from './components/navbar/navbar';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';

const App = (props) => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        props.youtube.mostPopular().then(items => setVideos(items));
    }, []);
    const handleSubmit = (q) => {
        props.youtube.searching(q).then(items => setVideos(items));
    }
    return (
        <div className={styles.wrap}>
            <Navbar onSubmit={handleSubmit} />
            <VideoList videos={videos} />
        </div>
    )
}

export default App;
