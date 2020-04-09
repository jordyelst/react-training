import React from 'react';
import {connect} from 'react-redux';
import {logInRequest} from '../redux/actions/login.actions';

const LogInButton = ({dispatch}) => {
    return <button onClick={() => dispatch(logInRequest())}>Log in</button>
};

export default connect()(LogInButton);