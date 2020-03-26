import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';

export default function Routes() {
    return ( //Switch: garante q uma rote só seja executada por momento
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    );
}
