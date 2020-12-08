import './App.css';
import Dashboard from './components/Dashboard';
import routes from './routes';
import  { withRouter } from 'react-router-dom';
import './components/Auth/Auth.css';
import './components/Header/header.css'
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
