import React from 'react';
import { Link } from 'react-router-dom';

const Login = ( props ) => {
    return (
        <div className="login-page">
            <div className="login-box">
                <div className="login-logo">
                    <a href="#"><b>MUEBLES</b>imelda</a>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>

                        <form method="post">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="username"></input>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                    <span className="fas fa-envelope"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="password"></input>
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
                                    <button type="button" className="btn btn-primary btn-block" onClick={ () => props.getUserLoggin() }>Sign In</button>
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