import React, { memo, useRef } from 'react';
import styles from './navbar.module.css';

const Navbar = memo((props) => {
    const inputRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(inputRef.current.value);
    }
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                Youtube
            </div>
            <form className={styles.search} onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} className={styles.keyword} placeholder="Search.." />
                <button className={styles.btn_search}>검색</button>
            </form>
        </nav>
    );
});

export default Navbar;
