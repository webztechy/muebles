import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { isLoggedin } from '../actions';
import { isEmpty } from './../helpers/Validation';
import config from './../helpers/Config';

import { confirmAlert } from 'react-confirm-alert'; // Import

const Login = ( props ) => {

    const dispatch = useDispatch();
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const pushUsername = (e) =>{
        setUsername(e.target.value);
    }

    const pushPassword = (e) =>{
        setPassword(e.target.value);
    }

    const messagePopup = (msg) => {
        confirmAlert({
          title: 'Alert',
          message: msg.toString(),
          buttons: [
            {
              label: 'Ok'
            }
          ]
        });
    }

    const getAccess = e => {
        e.preventDefault();

        if ( !isEmpty(username) &&  !isEmpty(password) ){
            let data_meta = {
                username : username,
                password : password,
              };

            axios
            .post(config.api_url+'users/login', data_meta)
            .then( response => {

                const return_res = response;
                
                if ( return_res.status==200 && return_res.data.length>0  ){
                    const user_detail = return_res.data[0];

                    sessionStorage.setItem(
                        "login_session",
                        JSON.stringify(user_detail)
                    );

                    dispatch( isLoggedin(1) );

                }else{
                    dispatch( isLoggedin(0) );
                    messagePopup('username and password did not matched!');
                } 
    
            })
            .catch(err => {
                //console.error(err);
                dispatch( isLoggedin(0) );
                messagePopup('could not process request!');
            });
        }
    }


    return (
        <div className="login-page">
            <div className="login-box">
                <div className="login-logo">
                    <a href="#"><b>MUEBLES</b>imelda</a>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>

                        <form method="post" onSubmit={getAccess}> 
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" value={username} onChange={ pushUsername } placeholder="username"></input>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                    <span className="fas fa-envelope"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" value={password} onChange={ pushPassword } placeholder="password"></input>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                    <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="remember"></input> <label for="remember">Remember Me</label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <button type="submit" className="btn btn-primary btn-block" >Sign In</button>
                                </div>
                            </div>
                        </form>

                        <div className="social-auth-links text-center mb-3">
                            <p>- OR -</p>
                             <a href="#" className="btn btn-block btn-primary">
                                <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
                            </a>
                            <a href="#" className="btn btn-block btn-danger">
                                <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
                            </a>
                        </div>

                        <p className="mb-1">
                            <a href="#">I forgot my password</a>
                        </p>
                        <p className="mb-0">
                            <a href="#" className="text-center">Register a new membership</a>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;