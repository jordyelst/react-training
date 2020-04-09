import React from 'react';
import {connect} from 'react-redux';
import {removeHeaderItem} from '../redux/actions/header.actions';

const mapDispatchToProps = {
    removeHeaderItem
};

const HeaderMenu = ({label, removeHeaderItem}) => {
    const removeItem = () => {
        removeHeaderItem({
            label
        })
    };

    return <div onClick={removeItem} className={'cmp-header-menu__item'}>
        {label}
    </div>
};

export default connect(null,mapDispatchToProps)(HeaderMenu);