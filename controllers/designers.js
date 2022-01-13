const designer = require('../models/designer');

module.exports = {
    viewDesigners
}

function viewDesigners (req, res, next) {
    designer.find({}).exec((err, designers) => {
        res.render('designers/index', { user: req.user, designers })
    });
}