import React from 'react';
import Base from '../core/Base';
import { isAuthenticated } from '../auth/helper/index';
import { Link } from 'react-router-dom';

const AdminDashBoard = () => {

    const {
        user: { name, email, role }
    } = isAuthenticated();

    const adminLeftSide = () => {
        return (
            <div className="card mb-2">
                <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link text-danger" to="/admin/create/category">
                            Create Category
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link text-danger" to="/admin/categories">
                            Manage Category
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link text-danger" to="/admin/create/product">
                            Create Product
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link text-danger" to="/admin/products">
                            Manage Products
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link text-danger" to="/admin/orders">
                            Manage Orders
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }

    const adminRightSide = () => {
        return (
            <div className="card mb-2">
                <h4 className="card-header bg-danger text-white">Admin </h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className="badge badge-info mr-2">Name:</span>{name}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-info mr-2">Email:</span>{email}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-danger">Admin Area</span>
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <Base title="Welcome to Admin  Page" description="Manage all products here" className="container-fluid mt-2">
            <div className="container-fluid">
                    <div className="row bg-light card-1">
                        <div className="col-auto mt-2">{adminLeftSide()}</div>
                        <div className="col-9 mt-2">{adminRightSide()}</div>
                    </div>
            </div>
            <br></br><br></br> <br></br><br></br>
        </Base>
    );
}

export default AdminDashBoard;
