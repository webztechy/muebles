import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import { isEmpty } from './../helpers/Validation';
import { fieldSorter, toNormalArrayObject } from './../helpers/Utilities';

import { updatePageTitle } from './../actions';
import { currentUTCTime } from './../helpers/Utilities';
import config from './../helpers/Config';

//import Moment from 'react-moment';
import moment from 'moment';

import { confirmAlert } from 'react-confirm-alert'; // Import
//import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css; added in App.js


const ProductForm = ({match}) => {

    const dispatch = useDispatch();
    dispatch( updatePageTitle('Product Form') );

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

    const [ categories, setCategories] = useState([]);

    const [ formTitle, setFormtitle ] = useState('Add');
    const [ pid, setPid ] = useState(0);
    const [ pname, setPname ] = useState('');
    const [ pdesc, setPdesc ] = useState('');
    const [ pprice, setPprice ] = useState('');
    const [ pcategid, setPpcategid ] = useState(0);
    const [ pfeatured, setPfeatured ] = useState(0);
    const [ pstatus, setPstatus ] = useState(0);

    const pushName = (e) =>{
        setPname(e.target.value);
    }

    const pushDescription = (e) =>{
        setPdesc(e.target.value);
    }

    const pushPrice = (e) =>{
        setPprice(e.target.value);
    }

    const pushCategory = (e) =>{
        setPpcategid(e.target.value);
    }

    const pushFeatured = (e) =>{
        setPfeatured(e.target.value);
    }

    const pushStatus = (e) =>{
        setPstatus(e.target.value);
    }
    
    const onSubmit = e => {
        e.preventDefault();

        const utcTime = currentUTCTime();
        let data_meta = {
            id : pid,
            name : pname,
            description : pdesc,
            price : pprice,
            category_id : pcategid,
            featured_status : pfeatured,
            status : pstatus
          };

        if ( pid==0 ){
            const date_created = { date_created : moment.utc(utcTime).format('YYYY-MM-DD HH:mm:ss') };
            data_meta = {...data_meta, ...date_created };
        }

        let action_name = ( parseInt(pid)==0 ) ? 'add' : 'update'; 
        let label_name = ( parseInt(pid)==0 ) ? 'added' : 'updated'; 

        axios
        .post(config.api_url+'products/'+action_name, data_meta)
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

    const fecthCategories = async () => {
        const data = await fetch( config.api_url+'categories/list/1' );
        let lists = await data.json();

        lists = toNormalArrayObject(lists);
        lists = lists.sort(fieldSorter(['name']));

        setCategories(lists);
    }


    const fecthDetail = async () => {
        const pgroup_id = match.params.id;

        if ( parseInt(pgroup_id)>0 ){
            const data = await fetch(
                `${config.api_url}products/getById/${pgroup_id}`
            );

            if (data.status==200){
                let product_detail = await data.json();
                product_detail = product_detail[pgroup_id];
                
                setPid(pgroup_id);
                setPname(product_detail.name);
                setPdesc(product_detail.description);
                setPprice(product_detail.price);
                setPpcategid(product_detail.category_id); 
                setPfeatured(product_detail.featured_status); 
                setPstatus(product_detail.status); 
                
            }  
        }
    };

    useEffect( () => {
        let pid = match.params.id;
        if ( typeof pid ==='undefined' ){
            setFormtitle('Add');
            setPid(0);
            setPname('');
            setPdesc('');
            setPprice('');
            setPpcategid(0); 
            setPfeatured(0); 
            setPstatus(0); 
        }
    }, [match] ); //it will excecute multiple 

    useEffect( () => {
        fecthCategories();
        let pid = match.params.id;
        if ( pid>0 ){
            setFormtitle('Update');
            fecthDetail();
        } 
    }, []);


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">{formTitle} <small>detail</small></h3>
                        </div>
                        <form role="form" id="quickForm" onSubmit={onSubmit}>
                            <input type="hidden" name="pid" value={ pid } ></input>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text"  className="form-control" value={ pname } onChange={ pushName } required ></input>
                                </div>

                                <div className="form-group">
                                    <label>Description</label>
                                    <input type="text"  className="form-control" value={ pdesc } onChange={ pushDescription } required ></input>
                                </div>

                                <div className="form-group">
                                    <label>Price</label>
                                    <input type="number"  className="form-control" value={ pprice } onChange={ pushPrice } required ></input>
                                </div>

                                <div className="form-group">
                                    <label>Category</label>
                                    <select className="form-control" value={ pcategid } onChange={ pushCategory }> 
                                     <option value="0">choose</option>
                                     { Object.entries(categories).map( ([key, category] ) => (
                                        <option value={ category.group_id }>{ category.name }</option>
                                     ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>isFeatured?</label>
                                    <select className="form-control"  value={ pfeatured } onChange={ pushFeatured }> 
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Status</label>
                                    <select className="form-control"  value={ pstatus } onChange={ pushStatus }> 
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                </div>

                            </div>
                            <div className="card-footer">
                                <Link to="/products" className="btn btn-default mr-1">List</Link>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductForm;