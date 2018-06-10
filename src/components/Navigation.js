import React from 'react';
import SideBar from './SideBar';

class Navigation extends React.Component {
    state = {
        open: false
    }
    _handleClick = () => {
        this.setState({ open: !this.state.open })
    }
    render() {
        const { open } = this.state
        return (
            <div>
                <div className="navbar">
                    <span id="brand">{"<Mike Donkers />"}</span>
                    <ul>
                        <li onClick={this._handleClick}><i className="fa fa-bars" /> Menu</li>
                    </ul>
                </div>
                <SideBar open={open} handleClick={this._handleClick} />
            </div>
        )
    }
}

export default Navigation;