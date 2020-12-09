import './App.css';
import routes from './routes';
import  { withRouter } from 'react-router-dom';
import './components/Auth/Auth.css';
import './components/Header/header.css';
import './components/Dashboard/dashboard.css';
import './components/Cars/allCars.css';
import './components/Favorites/favorites.css';
import './components/SelectedCar/selectedCar.css';
import Header from'./components/Header/Header';

function App(props) {
  return (
    <div className="App">
      <Header/>
      {/* {props.location.pathname === '/' ? null : <Dashboard/>} */}
      {routes}
    </div>
  );
}

export default withRouter (App);
