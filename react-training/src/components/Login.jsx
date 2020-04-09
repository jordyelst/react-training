import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logInRequest, logOutRequest} from '../redux/actions/login.actions';

const mapStateToProps = state => {
    const {isLoggedIn} = state.loginReducer;
    return {isLoggedIn};
};

const mapDispatchToProps = {
    logInRequest,
    logOutRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(class Login extends Component {
    logIn = () => {
        this.props.logInRequest();
    };

    logOut = () => {
        this.props.logOutRequest();
    };

    render () {
        const {isLoggedIn} = this.props;

        return <div className={'cmp-login'}>
            <p>You are logged {isLoggedIn ? 'in' : 'out'}.</p>
            <button className={'cmp-login__button'} onClick={isLoggedIn ? this.logOut : this.logIn}>{isLoggedIn ? 'Logout' : 'Login'}</button>
        </div>
    }
})