import React from 'react';
import classNames from 'classnames'
class Error extends React.Component {
    state = {
        open: false
    }
    componentWillMount() {
        this.setState({
            open: true,
        })
        setTimeout(() => {
            this.setState({animate: true})
        }, 200);
    }
    _handleCloseClick = () => {
        this.setState({
            open: false
        })
        setTimeout(() => {
            this.props.unMountError()
        }, 300);
    }
    render() {
        const { open, animate } = this.state
        const {message} = this.props
        console.log(open)
        const classes = classNames({
            'alert': true,
            'show': open && animate,
            'hide': !open
        })
        return (
            <div className={classes}>
                <span className="closebtn" onClick={this._handleCloseClick}>&times;</span>
                <strong>Error!</strong> {this.props.message}
            </div>
        )
    }
}

export default Error