import React, { Component } from 'react';
import Item from './item';
import Player from './player';

class Content extends Component {
    state = {};
    handleEmbed = (embed) => {
        this.setState({ embed: embed })
    }
    render() {
        return (
            <>
                <Player embed={this.state.embed} />
                <ul>
                    {
                        this.props.lists.map(item => (<Item item={item} onEmbed={this.handleEmbed} />))
                    }
                </ul>
            </>
        );
    }
}

export default Content;
