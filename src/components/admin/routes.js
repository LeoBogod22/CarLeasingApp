import React from 'react';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import admin_cars from './admin_cars';
const Routes = () => (
    <Router>
            
            <Route path="admin" component={admin_cars} />
    </Router>
);

export default Routes;