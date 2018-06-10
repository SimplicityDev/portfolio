import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

const Navigation = () =>
    <div className="navigation">
        <AuthUserContext.Consumer>
            <Brand/>
            {authUser => authUser
                ? <NavigationAuth />
                : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>

const Brand = () => {
    <Link to={routes.LANDING}>
        <h3>
            {"<Mike Donkers />"}
        </h3>
    </Link>
}

const NavigationAuth = () =>
    <ul>
        <li><Link to={routes.LANDING}>Landing</Link></li>
        <li><Link to={routes.HOME}>Home</Link></li>
        <li><Link to={routes.ACCOUNT}>Account</Link></li>
        <li><SignOutButton /></li>
    </ul>

const NavigationNonAuth = () =>
    <ul>
        <li><Link to={routes.LANDING}>Landing</Link></li>
        <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
    </ul>

export default Navigation;