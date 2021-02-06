import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './Core/Components/NavBar';
import Home from './pages/home';
import Search from './pages/search';

const Routes = () => (

    
    <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>

            <Route path="/search" exact>
                <Search/>
            </Route>
        </Switch>
    </BrowserRouter>
); 

export default Routes;