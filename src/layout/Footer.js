import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="float-right d-none d-sm-block">
             <b>Version</b> 3.0.5
            </div>
                <strong>Copyright &copy; 2014-2019 <Link to="/" >AdminLTE.io</Link>.</strong> All rights
            reserved.
        </footer>
    )
}

export default Footer;