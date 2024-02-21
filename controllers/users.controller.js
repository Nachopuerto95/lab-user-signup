const User = require("../models/user.model");
const bcrypt = require("bcrypt");

module.exports.create = (req, res, next) => {
    res.render('./users/signup')
}

module.exports.doCreate = (req, res, next) => {

    bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {

      User.create({email: req.body.email, name: req.body.name, password: hash})
      .then((user) => {
          res.redirect(`/users/${user.id}`)
      })
      .catch((error) => next(error))
    })
}

module.exports.details = (req, res, next) => {
    
    User.findById(req.params.id)
        .then((user) => res.render('users/details', {user}))
        .catch((error) => next(error))
    
}

module.exports.edit = (req, res, next) => {
    User.findById(req.params.id)
        .then((user) => res.render('users/edit', {user}))
        .catch((error) => next(error))
}

module.exports.doEdit = (req, res, next) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then((user) => res.redirect(`/users/${user.id}`) )
        .catch((error) => next(error))
}

module.exports.delete = (req, res, next) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/'))
        .catch((error) => next(error))
}
