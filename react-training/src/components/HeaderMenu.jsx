import React from 'react';
import {connect} from 'react-redux';
import LogOutButton from './LogOutButton';
import LogInButton from './LogInButton';
import {addHeaderItem} from '../redux/actions/header.actions';
import HeaderItem from './HeaderItem';

const mapStateToProps = state => {
    const {username, isLoggedIn} = state.loginReducer;
    const {headerItems} = state.headerReducer;
    return {username, isLoggedIn, headerItems};
};

const mapDispatchToProps = {
    addHeaderItem
};

const HeaderMenu = ({isLoggedIn, username, headerItems, addHeaderItem}) => {
    return <div className={'cmp-header-menu'}>
        <div className={'cmp-header-menu__sub'}>
            <div className={'cmp-header-menu__left'}>
                {headerItems.map(headerItem => <HeaderItem label={headerItem.label}/>)}
                <button onClick={() => addHeaderItem({
                    label: headerItems.length + 1
                })}>+ Add header item</button>
            </div>
            <div className={'cmp-header-menu__right'}>
                {isLoggedIn && <p>{`Hello ${username}!`}</p>}
                {isLoggedIn ? <LogOutButton/> : <LogInButton />}
            </div>
        </div>
    </div>
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);