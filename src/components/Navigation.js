import React from 'react';
import SideBar from './SideBar';
import { isMobile } from 'react-device-detect';
import * as routes from './../constants/routes';
import {NavLink} from 'react-router-dom'
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
                    <NavLink to={routes.LANDING} id="brand"><img id="logo" src="/portfolio/logo.svg" alt="logo" />{!isMobile && <span>Mike Donkers</span>}</NavLink>
                    {isMobile && 
                        <ul>
                            <li onClick={this._handleClick}><i className="fa fa-bars" /> Menu</li>
                        </ul>
                    }
                    {!isMobile &&
                        <NavItems/>
                    }
                </div>
                {isMobile && <SideBar open={open} handleClick={this._handleClick} />}
            </div>
        )
    }
}


const NavItems = (props) => 
    <ul>
        <li><NavLink exact={true} activeClassName='is-active' to={routes.LANDING}>Home</NavLink></li>
        <li><NavLink exact={true} activeClassName='is-active' to={routes.SIGN_IN}>Inloggen</NavLink></li>
        <li>Contact</li>
    </ul>

export default Navigation;