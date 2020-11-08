import React from 'react';
import { Link } from 'react-router-dom';
import jQuery from 'jquery';
import config from './../helpers/Config';

import { useSelector, useDispatch } from 'react-redux';

import { isLoggedin } from '../actions';

const Sidebar = () => {

    const dispatch = useDispatch();
    
   /*  const toggleMenu = (e, id) => {
        jQuery(e.target).closest('.has-treeview').toggleClass('menu-open');
    } */

    const endAccess = () =>{
        dispatch( isLoggedin(0) );
        sessionStorage.removeItem('login_session');
    }

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">

            <Link to="/" className="brand-link">
                <img src={ config.site_url + 'assets/theme/img/AdminLTELogo.png'}
                    alt="AdminLTE Logo"
                    className="brand-image img-circle elevation-3"
                    style={{opacity : 0.8}}></img>
                <span className="brand-text font-weight-light">MUEBLES</span>
            </Link>

            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src={ config.site_url + 'assets/theme/img/user2-160x160.jpg'} className="img-circle elevation-2" alt="User Image"></img>
                    </div>
                    <div className="info">
                         <Link to="/"  className="d-block">Adam Smith</Link>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>Dashboard</p>
                            </Link>
                        </li>

                        <li className="nav-item has-treeview">
                            <Link to="#" className="nav-link">
                                <i className="nav-icon fas fa-barcode"></i>
                                <p>
                                    Products
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to="/products" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                        <p>List</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/product-form" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                        <p>Add</p>
                                    </Link>
                                </li>

                            </ul>
                        </li>


                        <li className="nav-item has-treeview">
                            <Link to="#"  className="nav-link">
                                <i className="nav-icon fas fa-book"></i>
                                <p>
                                    Categories
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to="/categories" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                        <p>List</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/category-form" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                        <p>Add</p>
                                    </Link>
                                </li>

                            </ul>
                        </li>

        
                        <li className="nav-item">
                            <Link to="/orders" className="nav-link">
                                <i className="nav-icon fas fa-shopping-basket"></i>
                                <p>Orders</p>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="#" className="nav-link">
                                <i className="nav-icon fas fa-newspaper"></i>
                                <p>News Letter</p>
                            </Link>
                        </li>


                        <li className="nav-item has-treeview">

                            {/* <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
                            <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> */}

                            <Link to="#" className="nav-link">
                                <i className="nav-icon fas fa-users"></i>
                                <p>
                                    Users
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to="/users" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                        <p>List</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/user-form" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                        <p>Add</p>
                                    </Link>
                                </li>

                            </ul>
                        </li>
                            
                        <li className="nav-item">
                            <div className="nav-link" onClick={ () => endAccess() }>
                                <i className="nav-icon fas fa-lock"></i>
                                <p>Logout</p>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}
export default Sidebar;