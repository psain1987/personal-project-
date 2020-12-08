import { Link } from 'react-router-dom';
// import Cars from './Cars';
// import Favorites from './Favorites';

const Dashboard = () => {


    return (
        <div>This is the Dashboard component
            <button><Link to='/cars'></Link>CARS</button>
            <button><Link to='/fav'></Link>FAVORITES</button>
        </div>
    )
}

export default Dashboard;