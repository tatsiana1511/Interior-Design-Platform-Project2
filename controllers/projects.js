const Designer = require('../models/designer');

module.exports = {
    viewProjects,
    delete: deleteProject,
}

function viewProjects (req, res, next) {
    Designer.findOne({googleId: req.user.googleId}).exec((err, designer) => {
        res.render('projects/index', { user: req.user, projects: designer.projects })
    });
}

function deleteProject(req, res) {
    Designer.findOne({googleId: req.user.googleId}).exec((err, designer) => {
        designer.projects = designer.projects.filter(p => p._id.toString() !== req.params.id);
        designer.save(function(err) {
            res.redirect('/projects');
        })
    })
  }