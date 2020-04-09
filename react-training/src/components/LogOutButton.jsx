import React from 'react';
import {connect} from 'react-redux';
import {logOutRequest} from '../redux/actions/login.actions';

const LogOutButton = ({dispatch}) => {
    return <button onClick={() => dispatch(logOutRequest())}>Log out</button>
};

export default connect()(LogOutButton);