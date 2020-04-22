const Category = require("../models/category")


exports.getCategoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, cate) => {
        if (err || !cate) {
            return res.status(400).json({
                error: "Category Not found in DB"
            });
        }
        req.category = cate;
        next();
    });
};

exports.createCategory = (req, res) => {
    const category = new Category(req.body);
    category.save((err, category) => {
        if (err || !category) {
            return res.status(400).json({
                error: "Not able to save Category in DB"
            });
        }
        res.json({ category });
    });
}


exports.getCategory = (req, res) => {
    return res.json(req.category);
}

exports.getAllCategory = (req, res) => {
    Category.find().exec((err, catagories) => {
        if (err || !catagories) {
            return res.status(400).json({
                error: "No Categories found in DB"
            });
        }
        res.json(catagories);
    })
}

exports.updateCategory = (req, res) => {
    const category = req.category;
    category.name = req.body.name;

    category.save((err, updatedCategory) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to Update Category"
            });
        }
        res.json(updatedCategory);
    });
};

exports.removeCategory = (req, res) => {
    const category = req.category;

    category.remove((err, category) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to delete Category"
            });
        }
        res.json({
            message: "Successfully Deleted - " + category.name + " Category."
        });
    });

}