import React from 'react';
import styles from './item.css';

const Item = (props) => {
    const item = props.item.snippet;
    const handleEmbed = () => {
        const id = (typeof(props.item.id) === 'string')?props.item.id:props.item.id.videoId;
        props.onEmbed(id);
    }
    return (
        <li onClick={handleEmbed}>
            <img src={item.thumbnails.default.url} alt="" />
            <span className={styles.desc}>
                <span className={styles.title}>{item.title}</span>
            </span>
        </li>
    );
};

export default Item;
