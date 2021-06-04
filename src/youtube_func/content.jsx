import React, { useState } from 'react';
import Item from './item';
import Player from './player';

const Content = (props) => {
    const [embed, setEmbed] = useState();
    const handleEmbed = (embed) => {
        setEmbed(embed);
    }
    return (
        <>
            <Player embed={embed} />
            <div>
                {
                    props.lists.map(item => <Item item={item} onEmbed={handleEmbed} />)
                }
            </div>
        </>
    );
}

export default Content;
