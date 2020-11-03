import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dateFormatted } from './../helpers/Validation';
import { updatePageTitle } from './../actions';

const Products = () => {

    const dispatch = useDispatch();
    dispatch( updatePageTitle('Products') );

    useEffect( () => {
        fecthList();
    },[]);

    const [ lists, setLists] = useState([]);


    const fecthList = async () => {
        
        const data = await fetch(
            '/products/list'
        );
        const lists = await data.json();
        console.log(lists);
        setLists(lists);
    };


    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">All List</h3>

                <div className="card-tools">
                    <ul className="pagination pagination-sm float-right">
                        <li className="page-item"><a className="page-link" href="#">&laquo;</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">&raquo;</a></li>
                    </ul>
                </div>
            </div>
            <div className="card-body p-0">
                <table className="table">
                    <thead>
                    <tr>
                        <th style={{ width: '10px' }}>#</th>
                        <th>title</th>
                        <th>price</th>
                        <th>category</th>
                        <th>featured</th>
                        <th style={{ width: '40px' }}>created</th>
                    </tr>
                    </thead>
                    <tbody>
                        { lists.map ( list => (
                        <tr key={list.id}>
                            <td>{list.id}</td>
                            <td>{list.title}</td>
                            <td>{list.price}</td>
                            <td>{list.category_id}</td>
                            <td>{list.featured_status}</td>
                            <td>{ list.date_created }</td>
                            <td></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products;