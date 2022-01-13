var mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    propertyType: String,
    location: String,
    completed: Date,
    style: String,
    gallery: String
}, {
    timestamps: true
})

var reviewSchema = new mongoose.Schema({
    userName: String,
    text: String
}, {
    timestamps: true
});

var designerSchema = new mongoose.Schema({
  name: String,
  email: String,
  location: String,
  style: String,
  avatar: String,
  projects: [projectSchema],
  reviews: [reviewSchema],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Designer', designerSchema);