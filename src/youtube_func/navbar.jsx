import React, { useRef, memo } from 'react';

const Navbar = memo((props) => {
    const formRef = useRef();
    const inputRef = useRef();
    const onSubmit = (e) => {
        console.log('onsubmit', inputRef.current.value);
        props.onSearching(inputRef.current.value);
        e.preventDefault();
    };
    return (
        <form ref={formRef} onSubmit={onSubmit}>
            <h1>Youtube</h1>
            <input type="text" ref={inputRef} placeholder="Search..." />
            <button><i className="fas fa-search"></i></button>
        </form>
    );
});

export default Navbar;
