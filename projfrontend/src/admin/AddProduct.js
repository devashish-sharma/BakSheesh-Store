import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link, Redirect } from "react-router-dom";
import { getCategories, createProduct } from "./helper/adminapicall";
import { isAuthenticated } from "../auth/helper/index";
import '../styles.css';

const AddProduct = () => {
    const { user, token } = isAuthenticated();

    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        photo: "",
        categories: [],
        category: "",
        loading: false,
        error: "",
        createdProduct: "",
        getaRedirect: false,
        formData: ""
    });

    const {
        name,
        description,
        price,
        stock,
        categories,
        category,
        loading,
        error,
        createdProduct,
        getaRedirect,
        formData
    } = values;

    useEffect(() => {
        const preload = () => {
            getCategories().then(data => {
                //console.log(data);
                if (data.error) {
                    setValues({ ...values, error: data.error });
                } else {
                    setValues({
                        ...values,
                        categories: data,

                        formData: new FormData()
                    });
                }
            }).catch(err => console.log(error));
        };
        preload();
    }, []);

    const performRedirect = () => {
        // if (name === null) {
        //     return <div className="alert alert-info">
        //         <h2>Fill Name...</h2>
        //     </div>
        // } else {
        //     setTimeout(function () {
        //         window.location = '/admin/dashboard';
        //     }, 5000);
        // }

        document.getElementById('delayMsg').innerHTML = 'Please wait you\'ll be redirected after <span id="countDown">5</span> seconds....';
        var count = 5;
        setInterval(function () {
            count--;
            document.getElementById('countDown').innerHTML = count;
            if (count === 0) {
                window.location = '/';
            }
        }, 1000);
    }

    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true });
        createProduct(user._id, token, formData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    name: "",
                    description: "",
                    price: "",
                    photo: "",
                    stock: "",
                    loading: true,
                    getaRedirect: true,
                    createdProduct: data.name
                });
            }
            performRedirect();

        }).catch(err => console.log(error));
    };

    const handleChange = name => event => {
        const value = name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
    };

    const successMessage = () => (
        <div
            className="alert alert-success alert-heading alert-dismissible fade show" role="alert" style={{ display: createdProduct ? "" : "none" }}
        >
            <h4>{createdProduct} created successfully</h4>
        </div>
    );
    const warningMessage = () => {
        if (error) {
            return <h4 className="alert alert-warning alert-heading alert-dismissible fade show" role="alert">Failed to create category</h4>;
        }
    };
    const createProductForm = () => (
        <form>
            <span>Post photo</span>
            <div className="form-group">
                <input
                    onChange={handleChange("photo")}
                    type="file"
                    name="photo"
                    accept="image"
                    placeholder="choose a file"
                />
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange("name")}
                    name="photo"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                />
            </div>
            <div className="form-group">
                <textarea
                    onChange={handleChange("description")}
                    name="photo"
                    className="form-control"
                    placeholder="Description"
                    value={description}
                />
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange("price")}
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    value={price}
                />
            </div>
            <div className="form-group">
                <select
                    onChange={handleChange("category")}
                    className="form-control"
                    placeholder="Category"
                >
                    <option>Select</option>
                    {categories &&
                        categories.map((cate, index) => (
                            <option key={index} value={cate._id}>
                                {cate.name}
                            </option>
                        ))}
                </select>
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange("stock")}
                    type="number"
                    className="form-control"
                    placeholder="Stock"
                    value={stock}
                />
            </div>

            <button
                type="submit"
                onClick={onSubmit}
                className="btn btn-outline-success mb-3"
            >
                Create Product
      </button>
        </form>
    );

    return (
        <Base
            title="Add a product here!"
            description="Welcome to product creation section"
            className="container bg-white p-4 mt-2 mb-2"
        >

            <div id="delayMsg" className="text-center"></div>
            <div className="container-fluid">
                <div className="row bg-light card-1 text-white rounded">
                    <div className="col-md-8 offset-md-2">
                        <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-2">
                            Admin Home
                        </Link>
                        {successMessage()}
                        {warningMessage()}
                        {createProductForm()}
                    </div>
                </div>
            </div>
        </Base>
    );
};

export default AddProduct;
