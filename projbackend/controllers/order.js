const { Order, ProductCart } = require("../models/order")

exports.getOrderById = (req, res, next, id) => {
    Order.findById(id)
        .populate("products.product", "name price")
        .exec((err, order) => {
            if (err || !order) {
                return res.status(400).json({
                    error: "Order Not found in DB"
                });
            }
            req.order = order;
            next();
        });
};

exports.createorder = (req, res) => {
    req.body.order.user = req.profile;
    const order = new Order(req.body.order)
    order.save((err, order) => {
        if (err || !order) {
            return res.status(400).json({
                error: "Order Not saved in DB"
            });
        }
        res.json(order);
    });
}

exports.getAllOrders = (req, res) => {
    Order.find()
        .populate("user", "_id name")
        .exec((err, order) => {
            if (err || !order) {
                return res.status(400).json({
                    error: "Orders not found"
                });
            }
            res.json(order);
        });
}

exports.getOrderStatus = (req, res) => {
    res.json(Order.schema.path("status").enumValues);

}

exports.updateStatus = (req, res) => {
    Order.update(
        { _id: req.body.orderId },
        { $set: { status: req.body.status } },
        (err, order) => {
            if (err || !order) {
                return res.status(400).json({
                    error: "Cannot Update Orders status"
                });
            }
            res.json(order);
        }
    );
}