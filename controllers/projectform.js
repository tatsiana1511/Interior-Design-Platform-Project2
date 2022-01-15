const Designer = require("../models/designer");

module.exports = {
    projectForm,
    create
}

function projectForm (req, res, next) {
    res.render('projectform/index', { user: req.user});
}

function create(req, res) {
    Designer.findOne({googleId: req.user.googleId}, function(err, designer) {
        designer.projects.push({
            propertyType: req.body.propertyType,
            location: req.body.location,
            completed: req.body.completed,
            style: req.body.style,
            gallery: req.body.gallery
        })
        designer.save(function(err) {
            res.redirect(`/designers/${designer._id}/projects`);
        })
    })
}