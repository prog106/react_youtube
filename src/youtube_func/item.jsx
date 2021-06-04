import React from 'react';
import styles from './item.css';

const Item = (props) => {
    const item = props.item.snippet;
    const handleEmbed = () => {
        props.onEmbed(props.item.id);
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
