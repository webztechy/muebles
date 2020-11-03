import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { updatePageTitle } from '../actions';
import { isEmpty } from './../helpers/Validation';
import { userTypeLabels, currentUTCTime } from './../helpers/Utilities';

//import Moment from 'react-moment';
import moment from 'moment';

import { confirmAlert } from 'react-confirm-alert'; // Import
//import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css; added in App.js

const UserForm = ({match}) => {

    const dispatch = useDispatch();
    dispatch( updatePageTitle('User Form') );

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

    const [ formTitle, setFormtitle ] = useState('Add');
    const [ uid, setUid ] = useState(0);
    const [ ufname, setUfname ] = useState('');
    const [ ulname, setUlname ] = useState('');
    const [ uaddress, setUaddress ] = useState('');
    const [ uemail, setUemail ] = useState('');
    const [ ucontact, setUcontact ] = useState('');
    const [ utype, setUtype ] = useState(1);
    const [ uusername, setUusername ] = useState('');
    const [ upassword, setUpassword ] = useState('');
    const [ ustatus, setUstatus ] = useState(0);
    const [ passwordAttr, setPasswordattr ] = useState('required');
    
    const pushFname = (e) =>{
        setUfname(e.target.value);
    }

    const pushLname = (e) =>{
        setUlname(e.target.value);
    }

    const pushAddress = (e) =>{
        setUaddress(e.target.value);
    }

    const pushEmail = (e) =>{
        setUemail(e.target.value);
    }

    const pushContact = (e) =>{
        setUcontact(e.target.value);
    }

    const pushType = (e) =>{
        setUtype(e.target.value);
    }

    const pushUsername = (e) =>{
        setUusername(e.target.value);
    }

    const pushPassword = (e) =>{
        setUpassword(e.target.value);
    }

    const pushStatus = (e) =>{
        setUstatus(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();

        const utcTime = currentUTCTime();
        let data_meta = {
            id : uid,
            username : uusername,
            first_name : ufname,
            last_name : ulname,
            email : uemail,
            address : uaddress,
            contact_number : ucontact,
            type : utype,
            status : ustatus
          };

        if ( uid==0 ){
            const date_created = { date_created : moment.utc(utcTime).format('YYYY-MM-DD HH:mm:ss') };
            data_meta = {...data_meta, ...date_created };
        }

        if ( !isEmpty(upassword) ){
            const password_meta = { password : upassword };
            data_meta = {...data_meta, ...password_meta };
        }
       
        let action_name = ( parseInt(uid)==0 ) ? 'add' : 'update'; 
        let label_name = ( parseInt(uid)==0 ) ? 'added' : 'updated'; 

        axios
        .post('/users/'+action_name, data_meta)
        .then( response => {
            const return_res = response.data;
        
            if ( return_res.status==1 ){
                messagePopup(label_name+' successfully!');
            }else{

                messagePopup('could not '+label_name+' data!');
            } 

        })
        .catch(err => {
            console.error(err);
            messagePopup('could not process request!');
        });
    }

    const fecthDetail = async () => {
        const user_id = match.params.id;

        if ( parseInt(user_id)>0 ){
            axios
            .post('/users/list', { id : user_id })
            .then( response => {
                let user_detail = response.data;
                user_detail = user_detail[user_id];

                setUid(user_id);
                setUfname(user_detail.first_name);
                setUlname(user_detail.last_name);
                setUaddress(user_detail.address);
                setUemail(user_detail.email);
                setUcontact(user_detail.contact_number);
                setUstatus(user_detail.status);
                setUtype(user_detail.type); 
                setUusername(user_detail.username);
                setUpassword('');
                setPasswordattr('');
                
            })
            .catch(err => {
                messagePopup('Could not get record detail!');
            });
        }
    };

    useEffect( () => {
        const user_id = match.params.id;
        if ( typeof user_id ==='undefined' ){
            setFormtitle('Add');

            setUid(0);
            setUfname('');
            setUlname('');
            setUaddress('');
            setUemail('');
            setUcontact('');
            setUstatus(0); 
            setUtype(1);
            setUusername(''); 
            setPasswordattr('required');
        }
    }, [match] ); //it will excecute multiple 

    useEffect( () => {
        const user_id = match.params.id;
        if ( user_id>0 ){
            setFormtitle('Update');
            fecthDetail();
        } 
    }, []);



    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">{formTitle} <small>detail</small></h3>
                        </div>
                        <form role="form" id="quickForm" onSubmit={onSubmit}>
                            <div className="card-body">
                                 <div className="row">
                                      <div className="col-md-6">
                                            <div className="form-group">
                                                <label>First Name</label>
                                                <input type="text"  className="form-control" value={ufname} onChange={ pushFname } required ></input>
                                            </div>

                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input type="text"  className="form-control" value={ulname} onChange={pushLname} required ></input>
                                            </div>

                                            <div className="form-group">
                                                <label>Address</label>
                                                <input type="text"  className="form-control" value={uaddress} onChange={pushAddress} required ></input>
                                            </div>

                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="email"  className="form-control" value={uemail} onChange={pushEmail} required ></input>
                                            </div>

                                            <div className="form-group">
                                                <label>Contact Number</label>
                                                <input type="text"  className="form-control" value={ucontact} onChange={pushContact} required ></input>
                                            </div>

                                        </div>

                                        <div className="col-md-6">
                                        
                                            <div className="form-group">
                                                <label>Type</label>
                                                <select className="form-control"  value={ utype } onChange={ pushType }> 
                                                { Object.entries(userTypeLabels()).map( ([key, value] ) => (
                                                    <option value={key}>{value}</option>
                                                ))}
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <label>Status</label>
                                                <select className="form-control"  value={ ustatus } onChange={ pushStatus }> 
                                                    <option value="1">Active</option>
                                                    <option value="0">Inactive</option>
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <label>Username</label>
                                                <input type="text"  className="form-control" value={ uusername } onChange={pushUsername} required ></input>
                                            </div>

                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="password"  className="form-control" onChange={pushPassword} required={passwordAttr} ></input>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="card-footer">
                                <Link to="/users" className="btn btn-default mr-1">List</Link>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserForm;