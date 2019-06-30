import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'mobx-react';

import Home from './Home';
import User from './User';
import Product from './Product';
import Navigation from './Navigation';
import Cart from './Cart';

import './App.scss';

import Stores from './Stores';
import Category from "./Category";



const App = () => (
    <Provider stores={Stores}>
        <BrowserRouter>
            <div className='root'>
                <Navigation />
                <section className='app-body' >
                    <Route path='/' exact component={Home}/>
                    <Route path='/user/:command?' exact component={User}/>
                    <Route path='/cart/:command?' exact component={Cart}/>
                    <Route path='/product/:command?/:productId?' exact component={Product}/>
                    <Route path='/category/:categoryId?' exact component={Category}/>
                </section>
            </div>
        </BrowserRouter>
    </Provider>
);

export default App;