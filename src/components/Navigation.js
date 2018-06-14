import React from 'react';
import SideBar from './SideBar';
import { isMobile } from 'react-device-detect';
import * as routes from './../constants/routes';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
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
                    <NavLink to={routes.LANDING} id="brand"><img id="logo" src="./logo.svg" alt="logo" />{!isMobile && <span>Mike Donkers</span>}</NavLink>
                    {isMobile &&
                        <ul>
                        <li className="noSelect" onClick={this.context.changeLocale}>
                                {this.context.locale === "en" ? <span className="flag-icon flag-icon-nl"></span> : <span className="flag-icon flag-icon-gb"></span>}
                            </li>
                            <li style={{marginLeft: 15}}onClick={this._handleClick}><i className="fa fa-bars" /> Menu</li>
                        </ul>
                    }
                    {!isMobile &&
                        <NavItems />
                    }
                </div>
                {isMobile && <SideBar open={open} handleClick={this._handleClick} />}
            </div>
        )
    }
}


const NavItems = (props, context) => 
    <ul>
        <li><NavLink exact={true} activeClassName='is-active' to={routes.LANDING}><FormattedMessage id="navigation.home" defaultMessage="Home"/></NavLink></li>
        <li><NavLink exact={true} activeClassName='is-active' to={routes.SIGN_IN}><FormattedMessage id="navigation.login" defaultMessage="Log in" /></NavLink></li>
        <li>Contact</li>
        <li onClick={context.changeLocale}>
            {context.locale === "en" ? <span className="flag-icon flag-icon-nl"></span> : <span className="flag-icon flag-icon-gb"></span>}
        </li>
    </ul>
NavItems.contextTypes = {
    changeLocale: PropTypes.any,
    locale: PropTypes.string
}
Navigation.contextTypes = {
    changeLocale: PropTypes.any,
    locale: PropTypes.string
}
export default Navigation;