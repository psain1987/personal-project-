import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/reducer';

const Header = () => {

    const dispatch = useDispatch();

    

    return (
        <div className='header'>
            <div className='header-item' onClick={e => dispatch(logoutUser())}> Logout
            </div>
        </div>
    )
}

export default Header;