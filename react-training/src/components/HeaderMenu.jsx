import React from 'react';
import {connect} from 'react-redux';
import LogOutButton from './LogOutButton';
import LogInButton from './LogInButton';

const mapStateToProps = state => {
    const {username} = state.loginReducer;
    return {username};
};

const HeaderMenu = ({isLoggedIn, username}) => {
    return <div className={'cmp-header-menu'}>
        <div className={'cmp-header-menu__sub'}>
            <div className={'cmp-header-menu__left'}>
                {/* TODO 2: Display a list of all header items here, try to use one of the new higher order array methods we saw (map, filter reduce)
                A HeaderItem component already exists, make sure to import and use it <HeaderItem />*/}
                <button>+ Add header item {/* TODO 6: this button do anything yet, take a look at the login component, you'll need to use mapDispatchToProps
                to make your newly created actions available here, then do something on the click of this button, login component works on submit, but it's the same idea*/}</button>
            </div>
            <div className={'cmp-header-menu__right'}>
                {/*TODO 1: Only display the username when the user is logged in, take a look at the Login component to see how we conditionally display things there.
                Always showing the LogInButton doesn't make any sense either, a LogOutButton is available, render one or the other based on the login status as well.*/}
                <p>{`Hello ${username}!`}</p>
                <LogInButton />
            </div>
        </div>
    </div>
};

export default connect(mapStateToProps, null)(HeaderMenu);