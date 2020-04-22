import React, { useState, useEffect } from 'react';
import Base from '../core/Base';
import { Link, Redirect } from "react-router-dom";
import { isAuthenticated } from '../auth/helper';
import { getProducts, deleteProduct } from './helper/adminapicall';

const ManageProducts = () => {

    const [products, setProducts] = useState([])
    const { user, token } = isAuthenticated();

    const preload = () => {
        getProducts().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setProducts(data);
            }
        });
    };

    useEffect(() => {
        preload();
    }, [])

    const deleteThisProduct = productId => {
        deleteProduct(productId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                preload();
            }
        });
    };
    
    return (
        <Base title="Welcome admin" description="Manage products here" className="container-fluid mb-5 mt-5">
            <div className="container-fluid mb-2 mt-2 card-1">
                <Link className="btn btn-info" to={`/admin/dashboard`}>
                    <span className="">Admin Home</span>
                </Link>

                <div className="row mb-5 ">
                    <div className="col-12">
                        <h2 className="text-center text-dark my-3">Total 3 products</h2>

                        {products.map((product, index) => {
                            return (
                                <div key={index} className="row text-center mb-2 ">
                                    <div className="col-4">
                                        <h3 className="text-dark text-left">{product.name}</h3>
                                    </div>
                                    <div className="col-4">
                                        <Link
                                            className="btn btn-success"
                                            to={`/admin/product/update/${product._id}`}
                                        >
                                            <span className="">Update</span>
                                        </Link>
                                    </div>
                                    <div className="col-4">
                                        <button onClick={() => {
                                            deleteThisProduct(product._id);
                                        }} className="btn btn-danger">
                                            Delete
                                </button>
                                    </div>
                                </div>);
                        })}
                    </div>
                </div>
            </div>
        </Base>
    );
}

export default ManageProducts;
