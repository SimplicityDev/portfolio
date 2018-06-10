import React, {
    Component
} from 'react';
import { auth } from '../firebase'
import { Link } from 'react-router-dom'
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import AuthUserContext from './AuthUserContext';
const PrivateLinks = (props) => (
    <div>
        <li><Link onClick={props.handleClick} to={routes.LANDING}>Landing</Link></li>
        <li><Link onClick={props.handleClick}to={routes.HOME}>Home</Link></li>
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
                            {!authUser ? <div><li><Link onClick={handleClick} to={routes.SIGN_IN}>Sign In</Link></li></div> : <PrivateLinks handleClick={handleClick} handleLogout={auth.doSignOut} />}
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
export default SideBar
