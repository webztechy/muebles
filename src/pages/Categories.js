import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePageTitle } from '../actions';
import { Link } from 'react-router-dom';

import { fieldSorter, toNormalArrayObject } from './../helpers/Utilities';

//import Moment from 'react-moment';
import moment from 'moment';

import { confirmAlert } from 'react-confirm-alert'; // Import
//import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css; added in App.js

const Categories = () => {

    const dispatch = useDispatch();
    dispatch( updatePageTitle('Categories') );

    const [ lists, setLists] = useState([]);
    const [ isLoaded, setIsLoaded] = useState(0);

    const statusLabels = (n) => {
         return ( n==1 ) ? 'active' : 'inactive';
    }

    const fecthList = async () => {
        const data = await fetch( '/categories/list' );
        let lists = await data.json();

        for (const [key, value] of Object.entries(lists)) {
            //console.log(`${key}: ${value}`);

            const localTime  = moment.utc(value.date_created);  
            const local_time = moment(new Date(localTime)).format('DDMMMYY hh:mm:ss').toLocaleString();   

            const date_formatted = { date_formatted : local_time };
            lists[key] = { ...value, ...date_formatted };
        }

        lists = toNormalArrayObject(lists);
        lists = lists.sort(fieldSorter(['name']));

        setIsLoaded(1);
        setLists(lists);
    }

    const deleteCategory = async ( id) =>{
        
        if ( parseInt(id)>0 ){
            const data = await fetch(
                '/categories/deleteById/'+id
            );
            if ( data.status==200){
                setIsLoaded(0);
                fecthList();
            }

        }
    }

    const deleteConfirm = (id) => {
        confirmAlert({
          title: 'Delete Record?',
          message: 'This will permanent delete the selected record.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => deleteCategory(id)
            },
            {
              label: 'No',
              //onClick: () => alert('Click No')
            }
          ]
        });
    }
     
    // Similar to componentDidMount and componentDidUpdate
    useEffect( () => {
        setIsLoaded(0);
        fecthList();
    },[]);

    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">All List</h3>
            </div>
            <div className="card-body p-0">
                <table className="table">
                    <thead>
                    <tr>
                        <th style={{ width: '20px' }}>#</th>
                        <th>name</th>
                        <th>status</th>
                        <th style={{ width: '200px' }}>created</th>
                        <th style={{ width: '120px' }}>action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {  isLoaded ? 
                        ( Object.entries(lists).map( ([key, list] ) => (
                        <tr key={list.group_id}>
                            <td>{ (parseInt(key)+1) }.</td>
                            <td>{list.name}</td>
                            <td>{ statusLabels(list.status) }</td>
                            <td>{ list.date_formatted }</td>
                            <td>
                                <button type="button" className="btn btn-danger btn-sm mr-1 fas fa-trash-alt" onClick={ () => deleteConfirm( list.group_id ) }></button>
                                <Link to={`/category-form/${list.group_id}`} className="btn btn-primary btn-sm fas fa-edit"></Link>
                            </td>
                        </tr>
                        )) )
                        :
                        ( <tr><td colSpan="5">loading...</td></tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Categories;