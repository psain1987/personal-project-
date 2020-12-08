import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Cars from './components/Cars';
import Favorites from './components/Favorites';
import SelectedCar from './components/SelectedCar';

export default(
    <Switch>
        <Route exact path='/' component={Auth}></Route>
        <Route path='/cars' component={Cars}></Route>
        {/* <Route path='/dash' component={Dashboard}></Route> */}
        <Route path='/this-car' component={SelectedCar}></Route>
        <Route path='/fav' component={Favorites}></Route>
    </Switch>
)