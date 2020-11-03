import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { updatePageTitle } from '../actions';
import { currentUTCTime } from './../helpers/Utilities';

//import Moment from 'react-moment';
import moment from 'moment';

import { confirmAlert } from 'react-confirm-alert'; // Import
//import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css; added in App.js

const CategoryForm = ({match}) => {

    const dispatch = useDispatch();
    dispatch( updatePageTitle('Category Form') );

    const [ formTitle, setFormtitle ] = useState('Add');
    const [ cid, setCid ] = useState(0);
    const [ cname, setCname ] = useState('');
    const [ cdesc, setCdesc ] = useState('');
    const [ cstatus, setCStatus ] = useState(0);
    
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

    const pushName = (e) =>{
        setCname(e.target.value);
    }

    const pushDesc = (e) =>{
        setCdesc(e.target.value);
    }

    const pushStatus = (e) =>{
        setCStatus(e.target.value);
    }
    
    const onSubmit = e => {
        e.preventDefault();

        const utcTime = currentUTCTime();
        let data_meta = {
            id : cid,
            name : cname,
            description : cdesc,
            status : cstatus
          };

        if ( cid==0 ){
            const date_created = { date_created : moment.utc(utcTime).format('YYYY-MM-DD HH:mm:ss') };
            data_meta = {...data_meta, ...date_created };
        }

        let action_name = ( parseInt(cid)==0 ) ? 'add' : 'update'; 
        let label_name = ( parseInt(cid)==0 ) ? 'added' : 'updated'; 

        axios
        .post('/categories/'+action_name, data_meta)
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
        const pgroup_id = match.params.id;

        if ( parseInt(pgroup_id)>0 ){
            const data = await fetch(
                `/categories/getById/${pgroup_id}`
            );

            if (data.status==200){
                let product_detail = await data.json();
                product_detail = product_detail[pgroup_id];
                
                setCid(pgroup_id);
                setCname(product_detail.name);
                setCdesc(product_detail.description);
                setCStatus(product_detail.status); 
            } 
        }
    };
    
    useEffect( () => {
        let cid = match.params.id;
        if ( typeof cid ==='undefined' ){
            setFormtitle('Add');
            setCid(0);
            setCname('');
            setCdesc('');
            setCStatus(0); 
        }
    }, [match] ); //it will excecute multiple 

    useEffect( () => {
       let cid = match.params.id;
       if ( cid>0 ){
           setFormtitle('Update');
           fecthDetail();
       } 
  
    }, []); // dont remove [], it will call execute twice


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">{formTitle} <small>detail</small></h3>
                        </div>
                        <form id="quickForm" onSubmit={onSubmit}>
                            <input type="hidden" name="cid" value={ cid } ></input>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text"  className="form-control" value={ cname } onChange={ pushName } required ></input>
                                </div>

                                <div className="form-group">
                                    <label>Description</label>
                                    <input type="text"  className="form-control" value={ cdesc } onChange={ pushDesc }  required ></input>
                                </div>

                                <div className="form-group">
                                    <label>Status</label>
                                    <select className="form-control"  value={ cstatus } onChange={ pushStatus }> 
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                </div>

                            </div>
                            <div className="card-footer">
                                <Link to="/categories" className="btn btn-default mr-1">List</Link>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryForm;