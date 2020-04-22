import React, { useState, createFactory } from 'react';
import Base from '../core/Base';
import { isAuthenticated } from '../auth/helper';
import { Link } from 'react-router-dom';
import { createCategory } from './helper/adminapicall';

const AddCategory = () => {

    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const { user, token } = isAuthenticated();

    const handleChange = event => {
        setError("");
        setName(event.target.value)
    }
    const clearvalue = () => {
        setName("");
    }
    const onSubmit = event => {
        event.preventDefault();
        setError("");
        setSuccess(false);

        //backand request fired
        createCategory(user._id, token, { name })
            .then(data => {
                if (data.error) {
                    setError(true);
                } else {
                    setError("");
                    setSuccess(true);
                    setName("");
                }
            });
    };

    const successMessage = () => {
        if (success) {
            return <div className="alert alert-success alert-heading alert-dismissible fade show" role="alert"><strong>Category created successfully !!!</strong> You should check in Category List.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        }
    };

    const warningMessage = () => {
        if (error) {
            return <h4 className="alert alert-warning alert-heading alert-dismissible fade show" role="alert">Failed to create category</h4>;
        }
    };

    const myCategoryForm = () => (
        <form>
            <div className="form-group">
                <p className="lead">Enter the category</p>
                <input
                    type="text"
                    className="form-control form-control-sm my-3"
                    onChange={handleChange}
                    value={name}
                    autoFocus
                    required
                    placeholder="For Ex. Summer"
                />
                <button onClick={onSubmit} className="btn btn-outline-info">
                    Create Category
        </button>
                <button type="button" onClick={clearvalue} value="reset" className="btn btn-outline-warning ml-2">
                    Remove Entries
      </button>
            </div>
        </form>
    );

    return (
        <Base title="Create a Category" description="Add a new Category for new Gift Products" className="container bg-white p-4 mt-2 mb-2">

            <div className="container-fluid">
                <div className="row card-1 bg-white">
                    <div className="col-md-8 offset-md-2 mb-2">
                        <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">
                            Admin Home
                            </Link>
                        {successMessage()}
                        {warningMessage()}
                        {myCategoryForm()}
                    </div>
                </div>
            </div>
        </Base>
    );
}

export default AddCategory;
