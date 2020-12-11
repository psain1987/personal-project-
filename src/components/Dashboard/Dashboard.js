import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import Cars from './Cars';
// import Favorites from './Favorites';

const Dashboard = () => {

    const [randomCar, setRandomCar] = useState({ year: '', make: '', model: '', style: '', price: '', image: '' });



    useEffect(() => {
        const getRandomCar = async () => {
            try {
                const res = await axios.get('/api/randomCar')
                setRandomCar(res.data)
            }
            catch (err) {
                console.log(err.response.request.response)
            }
        }

        getRandomCar()
    }, [])


    const { year, make, model, style, price, image } = randomCar

    return (
        <div >
            <div>
                <header className='welcome-tag'>Welcome </header>
            </div>
            <div>
                <h1 className='vehicle-header'>Take a look at this vehicle!</h1> 
            </div>

            <div className='random-car-box'>
                {year} {make} {model} {style} ONLY {price}
            </div>
            <div className='vehicle-card'>
                <img src={image} alt='logo' />
            </div>
            <div className='nav-btns'>
                <button><Link to='/cars'></Link>CARS</button>
                <button><Link to='/fav'></Link>FAVORITES</button>
            </div>
        </div>
    )
}

export default Dashboard;