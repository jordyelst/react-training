import React from 'react';
import {connect} from 'react-redux';
import LogOutButton from './LogOutButton';
import LogInButton from './LogInButton';

const mapStateToProps = state => {
    const {isLoggedIn} = state.loginReducer;
    return {isLoggedIn};
};

const HeaderMenu = ({isLoggedIn}) => {
    return <div className={'cmp-header-menu'}>
        <div className={'cmp-header-menu__sub'}>
            {isLoggedIn ? <LogOutButton /> : <LogInButton />}
        </div>
    </div>
};

export default connect(mapStateToProps, null)(HeaderMenu);