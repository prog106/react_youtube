import React, { Component } from 'react';

class player extends Component {
    render() {
        if(this.props.embed) {
            const embed = `https://www.youtube.com/embed/${this.props.embed}`;
            return (
                <iframe id="ytplayer" type="text/html" width="320" height="180" src={embed} frameborder="0" allowfullscreen></iframe>
            );
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default player;
