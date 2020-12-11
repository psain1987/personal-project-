import './App.css';
import routes from './routes';
import './components/Auth/Auth.css';
import './components/Header/header.css';
import './components/Dashboard/dashboard.css';
import './components/Cars/allCars.css';
import './components/Favorites/favorites.css';
import './components/SelectedCar/selectedCar.css';
import Header from './components/Header/Header';
import { useLocation } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <Header />
      {location.pathname !== '/' ? <Dashboard /> : null}
      {routes}
    </div>
  );
}

export default (App);
