import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import withAuthentication from './components/withAuthentication';
import Navigation from './components/Navigation';
import LandingPage from './components/Landing';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import PasswordForgetPage from './components/PasswordForget';
import HomePage from './components/Home';
import AccountPage from './components/Account';

import TranslationProvider, { TranslationContext } from './components/TranslationContext'
import * as routes from './constants/routes';
import { addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_nl from 'react-intl/locale-data/nl';
import messages_nl from "./translations/nl.json";
import messages_en from "./translations/en.json";
import { IntlProvider } from "react-intl";
addLocaleData([...locale_en, ...locale_nl]);

const messages = {
  'nl': messages_nl,
  'en': messages_en
};
class App extends React.Component {
  render() {
    return (
      <TranslationProvider>
        <TranslationContext.Consumer>
          {({ locale, changeLocale }) => (
            <IntlProvider locale={locale} messages={messages[locale]} defaultMessage={messages_en}>
            <Router>
              <div>
                <Navigation />
                <Route exact path={routes.LANDING} component={() => <LandingPage />} />
                <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
                <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
                <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
                <Route exact path={routes.HOME} component={() => <HomePage />} />
                <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
              </div>
            </Router>
            </IntlProvider>
          )
          }
        </TranslationContext.Consumer>
      </TranslationProvider>
    )
  }
}
    
export default withAuthentication(App);