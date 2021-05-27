
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import GlobalStyles from './assets/styles/global';

import Home from './pages/Home';

function Routes() {
    return (
        <BrowserRouter>
                <Route path="/" exact component={Home} />
                <GlobalStyles />
        </BrowserRouter>
    )
}

export default Routes;