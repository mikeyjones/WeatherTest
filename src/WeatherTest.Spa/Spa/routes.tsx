import * as React from 'react';
import { Router, Route, HistoryBase } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import Weather from './components/Weather';
import Error from './components/Error';

export default <Route component={ Layout }>
    <Route path='/' components={{ body: Home }} />
    <Route path='/weather' components={{ body: Weather }} >
        <Route path='(:location)' /> { }
    </Route>
    <Route path='/error' components={{ body: Error }} />
</Route>;