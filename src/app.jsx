import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/navbar';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';

const App = (props) => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCfet8upPERDAie6nwQi7R_ygAqo2D-Kis", requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.items))
            .catch(error => console.log('error', error));
    }, []);
    const handleSubmit = (q) => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${q}&type=video&key=AIzaSyCfet8upPERDAie6nwQi7R_ygAqo2D-Kis`, requestOptions)
            .then(response => response.json())
            .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
            .then(items => setVideos(items))
            .catch(error => console.log('error', error));
    }
    return (
        <div className={styles.wrap}>
            <Navbar onSubmit={handleSubmit} />
            <VideoList videos={videos} />
        </div>
    )
}

export default App;