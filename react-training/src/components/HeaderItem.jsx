import React from 'react';
import {connect} from 'react-redux';
import LogOutButton from './LogOutButton';
import LogInButton from './LogInButton';

const HeaderMenu = (props) => {
    const removeItem = () => {
        {/*TODO 7: BONUS ROUND, using everything you did in the previous steps, make it possible to delete these HeaderItems upon clicking on them
        This means you'll need to create actions for it, update the reducer, figure out a way to **filter** out the correct item from the headerItems array, .. */}
    };

    return <div className={'cmp-header-menu__item'}>
        {/*TODO 5: Maybe something should get passed to this component and then displayed?*/}
    </div>
};

export default HeaderMenu;