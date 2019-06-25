import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Provider} from 'mobx-react';

import Home from './Home';
import User from './User';
import Navigation from './Navigation';

import './App.scss';

import Stores from './Product';

const App = () => (
    <Provider stores={Stores}>
      <BrowserRouter>
        <header className='app-header' style={{zIndex: '100'}}>
            <Link to='/'>Home</Link>
            <Link to='/user'>로그인</Link>
            <Navigation />
        </header>

        <section className='app-body'>
          <Route path='/' exact component={Home}/>
          <Route path='/user/:command?/' exact component={User}/>
          {/*<Route path='/user/:command?' exact component={User}/>*/}
        </section>
      </BrowserRouter>
    </Provider>
);

export default App;