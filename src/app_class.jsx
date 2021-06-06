import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
import Content from './youtube_class/content';
import Navbar from './youtube_class/navbar';
// import './app.css';

class App_class extends Component {
    state = {};
    componentDidMount() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=AIzaSyCfet8upPERDAie6nwQi7R_ygAqo2D-Kis", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.setState({ lists: result.items });
            })
            .catch(error => console.log('error', error));
    }
    searching = (keyword) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q=${keyword}&key=AIzaSyCfet8upPERDAie6nwQi7R_ygAqo2D-Kis`, requestOptions)
            .then(response => response.json())
            .then(result => {
                this.setState({ lists: result.items });
            })
            .catch(error => console.log('error', error));
    }
    render() {
        return (
            <div>
                <Navbar searching={this.searching} />
                <Content lists={(this.state.lists)?this.state.lists:[]} />
            </div>
        );
    }
}

export default App_class;
