import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import Cars from './Cars';
// import Favorites from './Favorites';

const Dashboard = () => {

    const [randomCar, setRandomCar] = useState({year: '', make: '', model: '', style:'', price: ''});

    

    useEffect(() => {
        const getRandomCar = async () => {
            try{
            const res = await axios.get('/api/randomCar')
            setRandomCar(res.data)
            }
            catch(err){
                console.log(err.response.request.response)
            }
        }
    
        getRandomCar()
      }, [])


      const{ year, make, model, style, price} = randomCar
    return (
        <div >
            <div>
                <header className='welcome-tag'>Welcome User!</header>
            </div>
            <div>
                <h1 className='vehicle-header'>Take a look at this vehicle!</h1>
            </div>

            <div>
                {year} {make} {model} {style} {price}
            </div>

            <div className='nav-btns'> 
                <button><Link to='/cars'></Link>CARS</button>
                <button><Link to='/fav'></Link>FAVORITES</button>
            </div>
        </div>
    )
}

export default Dashboard;