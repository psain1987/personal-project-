import { useState, useEffect } from 'react';
import axios from 'axios';


const Favorites = () => {

   const [favorite, setFavorite] = useState();
        

    

    return (
        <div>
            <h1 className='title-piece'>You haven't choosen any favorite cars yet...go pick some!</h1>
            {/* <h1 className='title-piece'>Here are the cars you added to your whishlist</h1> */}
        </div>
    )
}

export default Favorites;