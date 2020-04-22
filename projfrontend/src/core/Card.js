import React, { useState, useEffect } from 'react';
import ImageHelper from './helper/ImageHelper';
import { addItemToCart, removeItemFromCart } from './helper/cartHelper';
import { Redirect } from 'react-router-dom';

const Card = ({
    product,
    addtoCart = true,
    removeFromCart = false,
    setReload = f => f,
    reload = undefined
}) => {

    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(product.count);

    const cardTitle = product ? product.name : "A Photo From Internet";
    const cardDescription = product ? product.description : "Default Description";
    const cardPrice = product ? product.price : "Default Price";

    const addToCart = () => {
        addItemToCart(product, () => { setRedirect(true) })
    }

    const getARedirect = (redirect) => {
        if (redirect) {
            return <Redirect to="/cart" />
        }
    };

    const showAddToCart = addtoCart => {
        return (
            addtoCart && (
                <button
                    onClick={addToCart}
                    className="btn btn-block btn-outline-success mt-2 mb-2"
                >
                    Add to Cart
                </button>
            )
        );
    };

    const showARemoveFromCart = removeFromCart => {
        return (
            removeFromCart && (
                <button
                    onClick={() => {
                        removeItemFromCart(product._id);
                        setReload(!redirect)
                    }}
                    className="btn btn-block btn-outline-danger mt-2 mb-2"
                >
                    Remove from cart
                </button>
            )
        );
    };

    return (
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="dress-card">
                        <div class="dress-card-head">
                            {getARedirect(redirect)}
                            <ImageHelper product={product}
                                className="dress-card-img-top" />
                            <div class="surprise-bubble"><span class="dress-card-heart">
                                <i class="fas fa-heart"></i>
                            </span><a href="#"> <span>More</span></a></div>
                        </div>
                        <div class="dress-card-body">
                            <h4 class="dress-card-title">{cardTitle}</h4>
                            <p class="dress-card-para"> {cardDescription}</p>
                            <p class="dress-card-para"><span class="dress-card-price">Rs.839 &ensp;</span><span class="dress-card-crossed">Rs.2099</span><span class="dress-card-off">&ensp;(60% OFF)</span></p>
                            <div class="row">
                                <div class="col-md-6 card-button"><a href=""><div class="card-button-inner bag-button">Add to Bag</div></a></div>
                                <div class="col-md-6 card-button"><a href=""><div class="card-button-inner wish-button">Whishlist</div></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //     </div >

        // // <div className="container-fluid mt-2">
        // //     <div className="card text-white bg-white">
        // //         <div className="card-header lead">{cardTitle}</div>
        // //         <div className="card-body">
        // //             {getARedirect(redirect)}
        // //             <ImageHelper product={product} />
        // //             <p className="lead bg-success font-weight-normal text-wrap">
        // //                 {cardDescription}
        // //             </p>
        // //             <p className="btn btn-success rounded btn-sm px-4">$ {cardPrice}</p>
        // //             <div className="row">
        // //                 <div className="col-12">
        // //                     {showAddToCart(addtoCart)}
        // //                 </div>
        // //                 <div className="col-12">
        // //                     {showARemoveFromCart(removeFromCart)}
        // //                 </div>
        // //             </div>
        // //         </div>
        // //     </div>
        // </div >
    );
};

export default Card;
