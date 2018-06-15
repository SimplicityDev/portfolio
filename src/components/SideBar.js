import React, {
    Component
} from 'react';
import { auth } from '../firebase'
import { Link } from 'react-router-dom'
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import AuthUserContext from './AuthUserContext';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
const PrivateLinks = (props) => (
    <div>
        <li><Link onClick={props.handleClick} to={routes.LANDING}>Home</Link></li>
        <li><Link onClick={props.handleClick}to={routes.ACCOUNT}>Account</Link></li>
        <li><SignOutButton onClick={props.handleLogout} /></li>
    </div>
)
class SideBar extends Component {
    render() {
        const { open, handleClick } = this.props
        return (
            <AuthUserContext.Consumer>
                {authUser =>
                    <div className="sidebar" style={{ right: open ? 0 : '-100vw' }}>
                        <div className="closeButton">
                            <i className="fa fa-times" onClick={handleClick}></i>
                        </div>
                        <ul>
                            {!authUser ? <div><li><Link onClick={handleClick} to={routes.SIGN_IN}><FormattedMessage id="navigation.login" defaultMessage="Log in" /></Link></li></div> : <PrivateLinks handleClick={handleClick} handleLogout={auth.doSignOut} />}
                            <div>
                                <li><Link to='/contact'>Contact</Link></li>
                            </div>
                        </ul>
                    </div>
                }
            </AuthUserContext.Consumer>
        )
    }
}
SideBar.contextTypes = {
    changeLocale: PropTypes.any,
    locale: PropTypes.string
}
export default SideBar
