import React from 'react';
import axios from 'axios';

const Header = () => {

    const logoutUser = async () => {
        try{
            const res = await axios.delete('/api/logout')
            console.log(res)
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div className='header'>
            <div className='header-item' onClick={e => logoutUser()}> Logout
            </div>
        </div>
    )
}

export default Header;