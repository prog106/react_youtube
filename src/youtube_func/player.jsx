import React from 'react';

const Player = (props) => {
    if(props.embed) {
        const embed = `https://www.youtube.com/embed/${props.embed}`;
        return (
            <iframe id="ytplayer" type="text/html" width="320" height="180" src={embed} frameborder="0" allowfullscreen></iframe>
        );
    } else {
        return (
            <div></div>
        )
    }
}

export default Player;
