import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/reducer';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Header = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const loggedOn = useSelector((state) => {
        return state.user.loggedOn
    });

    // useEffect(() => {
    //     if (!loggedOn) {
    //         history.push('/')
    //     }

    // }, [loggedOn, history])

    return (
        <div className='header'>
            <div className='header-item' onClick={e => dispatch(logoutUser())}> Logout
            </div>
        </div>
    )
}

export default Header;