import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
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
const Brand = () => 
    <Link to={routes.LANDING}>
        <h3>
            {"<Mike Donkers />"}
        </h3>
    </Link>

const NavigationNonAuth = () =>
    <div>
        <Brand/>
        <ul>
            <li><Link to={routes.LANDING}>Landing</Link></li>
            <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
        </ul>
    </div>

export default Navigation;