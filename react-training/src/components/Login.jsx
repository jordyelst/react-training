import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logInRequest, logOutRequest} from '../redux/actions/login.actions';

const mapStateToProps = state => {
    const {isLoggedIn, isLoading} = state.loginReducer;
    const {property} = state.headerReducer;
    return {isLoggedIn, property, isLoading};
};

const mapDispatchToProps = {
    logInRequest,
    logOutRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(class Login extends Component {
    state = {};

    logIn = (e) => {
        e.preventDefault();
        this.props.logInRequest({
            username: this.state.username
        });
    };

    logOut = (e) => {
        e.preventDefault();
        this.props.logOutRequest();
    };

    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        })
    };

    render () {
        const {isLoggedIn, property, isLoading} = this.props;

        return <form className={'cmp-login'} onSubmit={(e) => isLoggedIn ? this.logOut(e) : this.logIn(e)}>
            {!property && <p>You messed up, make sure to don't replace the entire state!</p>}
            {isLoading ?
                <p>Handling authentication, please wait...</p>
                :
                <p>You are logged {isLoggedIn ? 'in' : 'out'}.</p>
            }
            {!isLoggedIn && <input className={'cmp-login__input'} type={'text'} required={true} placeholder={'Username'} onChange={this.handleUsernameChange}/>}
            <br />
            <button type={'submit'} className={'cmp-login__button'}>{isLoggedIn ? 'Logout' : 'Login'}</button>
        </form>
    }
})