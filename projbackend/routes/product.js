var express = require("express");
var router = express.Router();

const {
    getProductById,
    createProduct,
    getProduct,
    photo,
    deleteProduct,
    updateProduct,
    getAllProducts,
    getAllUniqueCategories
} = require("../controllers/product");

const {
    isSignedIn,
    isAuthenticated,
    isAdmin
} = require("../controllers/authentication");

const { getUserById } = require("../controllers/user");


//all of params
router.param("userId", getUserById);
router.param("productId", getProductById);


//Here are all of the routes
//create route
router.post(
    "/product/create/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    createProduct
);

//read routes
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

//delete route
router.delete
    ("/product/:productId/:userId",
        isSignedIn,
        isAuthenticated,
        isAdmin,
        deleteProduct);

//update route
router.put
    ("/product/:productId/:userId",
        isSignedIn,
        isAuthenticated,
        isAdmin,
        updateProduct);

//listing route
router.get
    ("/products/", getAllProducts);

router.get("/products/categories", getAllUniqueCategories);

module.exports = router;