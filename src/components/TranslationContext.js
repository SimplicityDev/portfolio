import React from 'react';
import PropTypes from 'prop-types';
export const TranslationContext = React.createContext(null);
class TranslationProvider extends React.Component {
    state = { 
        locale: localStorage.getItem("language") ? localStorage.getItem("language") : navigator.language.split('-')[0] ,
    }
    _changeLocale = () => {
        this.setState({
            locale: this.state.locale === "en" ? "nl" : "en"
        }, () => {
            localStorage.setItem("language", this.state.locale)
        })
    }
    static childContextTypes = {
        changeLocale: PropTypes.any,
        locale: PropTypes.string
    };
    
    getChildContext() {
        return {
            changeLocale: this._changeLocale,
            locale: this.state.locale
        };
    }
    render() {
        console.log(localStorage.getItem("language"))
        
        return (
            <TranslationContext.Provider value={{locale:this.state.locale, changeLocale: this._changeLocale}}>
                {this.props.children}
            </TranslationContext.Provider>
        )
    }
}
export default TranslationProvider;