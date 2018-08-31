import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Main from "./components/main";
import CreateModel from './components/createModel';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Main} />
        <Route path='/createModel' component={CreateModel} />
    </Route>
);
