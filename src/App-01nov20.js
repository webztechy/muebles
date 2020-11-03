//import './App.css';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';

import Home from './pages/Home';
import Products from './pages/Products';

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  const pagename = useSelector( state => state.pages);
  
  useEffect( () => {
    updatePageTitle('Home');
  },[]);

  const [ pageTitle, pageTitleItems ] = useState();
  const updatePageTitle = ( title ) => {
    pageTitleItems(title);
  }; 


  return (
    <Router>
      <div className="wrapper">
          <Header />
          <Sidebar />

          <div className="content-wrapper">
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1>{ pagename }</h1>
                  </div>
                </div>
              </div>
            </section>

            <section className="content">
              <button type="button" onClick={() => updatePageTitle('click me')} >click me</button>
              <Switch>
                <Route path="/" exact component={Home} onClick={() => updatePageTitle('Home')} />
                <Route path="/products" exact component={Products} onClick={() => updatePageTitle('Products')} />
              </Switch>
            </section>
          </div>

          <Footer />
      </div>
    </Router>
  );
}

export default App;
