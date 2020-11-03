import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePageTitle } from './../actions';

import Moment from 'react-moment';
import moment from 'moment';


const Home = () => {

    const dispatch = useDispatch();
    dispatch( updatePageTitle('Home') );
    
    const now = new Date();        

    const utc_timezone = now.toUTCString();
    const utc_timestamp = new Date( now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds() ).getTime();

    const utc_created_time = moment.utc(utc_timezone).format('YYYY-MM-DD HH:mm:ss');

    console.log(utc_timestamp);
    console.log(utc_created_time);

    // to time
    //const message_time = moment(utc_created_time).format('DDMMMYY HH:mm:ss');
    const localTime  = moment.utc(utc_created_time);  
    const message_time = moment(new Date(localTime)).format('DDMMMYY HH:mm:ss').toLocaleString();    

    console.log(message_time);

    /* useEffect( () => {
        dispatch( updatePageTitle('Home') );
    },[]); */

    return (
        <div className="card">
            <div className="card-header">
            <h3 className="card-title">Home</h3>

            <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i className="fas fa-minus"></i></button>
                <button type="button" className="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                <i className="fas fa-times"></i></button>
            </div>
            </div>
            <div className="card-body">
                Start creating your amazing application!
            </div>
            <div className="card-footer">
            Footer
            </div>
        </div>
    )
}

export default Home;