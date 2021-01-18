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
                <h1 className='welcome-tag'>Welcome To the Auto Emporium </h1>
            </div>
            <div>
                <h2 className='vehicle-header'>We picked out this vehicle just for you!</h2> 
            </div>

            <div className='random-car-box'>
                  Your very own {year} {make} {model}
            </div>
            <div className='vehicle-card'>
                <img src={image} alt='logo' />
            </div>
            <p className='directions'>Use the navigation buttons at the top or click this button to see all of our cars <Link to='/cars'><button className='button'>Click Me!</button></Link></p>
           
            
        </div>
    )
}

export default Dashboard;