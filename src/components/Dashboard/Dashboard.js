import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


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
                <header className='welcome-tag'>Welcome To the Car Emporium! </header>
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
                <Link to='/cars' ><button>Cars</button></Link>
                <Link to='/fav' ><button>Favorites</button></Link>
            </div>
        </div>
    )
}

export default Dashboard;