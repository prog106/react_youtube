import React, { Component } from 'react';
import styles from './item.css';

class Item extends Component {
    handleEmbed = () => {
        this.props.onEmbed(this.props.item.id);
    }
    render() {
        const item = this.props.item.snippet;
        return (
            <li onClick={this.handleEmbed}>
                <img src={item.thumbnails.default.url} alt="" />
                <span className={styles.desc}>
                    <span className={styles.title}>{item.title}</span>
                </span>
            </li>
        );
    }
}

export default Item;
