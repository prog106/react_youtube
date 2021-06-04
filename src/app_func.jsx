import React, { useState, useEffect, memo } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
import Navbar from './youtube_func/navbar';
import Content from './youtube_func/content';

const app_func = memo((props) => {
    const [lists, setLists] = useState();
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result.items);
                setLists(result.items);
            })
            .catch(error => console.log('error', error));
    }, []);
    const searching = (keyword) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q=${keyword}&key=`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setLists(result.items);
            })
            .catch(error => console.log('error', error));
    }
    return (
        <>
            <Navbar onSearching={searching} />
            <Content lists={(lists)?lists:[]} />
        </>
    );
});

export default app_func;
