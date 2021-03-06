const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.User.find({})
            .populate("stocks")
            .then(dbModel => {
                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },

    findById: function(req, res) {
        db.User.find(req.params.id)
            .populate("stocks")
            .then(result => {
                res.json(result);
            });
    },

    add: function(req, res) {
        db.User.create(req.body)
            .then(dbModel => {
                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },

    update: function(req, res) {
        db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },

    remove: function(req, res) {
        db.User.findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};