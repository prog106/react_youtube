import React, { Component } from 'react';

class Navbar extends Component {
    formRef = React.createRef();
    inputRef = React.createRef();
    onSubmit = (e) => {
        e.preventDefault();
        this.props.searching(this.inputRef.current.value);
    }
    render() {
        return (
            <form ref={this.formRef} onSubmit={this.onSubmit}>
                <h1>Youtube</h1>
                <input type="text" ref={this.inputRef} placeholder="Search..." />
                <button><i className="fas fa-search"></i></button>
            </form>
        );
    }
}

export default Navbar;
