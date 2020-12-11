import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Cars from './components/Cars/allCars';
import Favorites from './components/Favorites/Favorites';
import SelectedCar from './components/SelectedCar/SelectedCar';

export default(
    <Switch>
        <Route exact path='/' component={Auth}></Route>
        <Route path='/cars' component={Cars}></Route>
        <Route path='/dash' component={Dashboard}></Route>
        <Route path='/this-car' component={SelectedCar}></Route>
        <Route path='/fav' component={Favorites}></Route> 
    </Switch>
)