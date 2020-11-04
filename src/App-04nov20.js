//import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';

//import Login from './pages/Login';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductForm from './pages/ProductForm';
import Categories from './pages/Categories';
import CategoryForm from './pages/CategoryForm';
import Orders from './pages/Orders';
import Users from './pages/Users';
import UserForm from './pages/UserForm';

import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function App() {

  const pageTitle = useSelector( state => state.pages);

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
                    <h1>{ pageTitle }</h1>
                  </div>
                </div>
              </div>
            </section>

            <section className="content">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/products" exact component={Products} />
                <Route path="/product-form" exact component={ProductForm} />
                <Route path="/product-form/:id" exact component={ProductForm} />
                <Route path="/categories" exact component={Categories} />
                <Route path="/category-form" exact component={CategoryForm} />
                <Route path="/category-form/:id" exact component={CategoryForm} />
                <Route path="/orders" exact component={Orders} />
                <Route path="/users" exact component={Users} />
                <Route path="/user-form" exact component={UserForm} />
                <Route path="/user-form/:id" exact component={UserForm} />
              </Switch>
            </section>
          </div>

          <Footer />
      </div>
    </Router>
  );
}

export default App;
