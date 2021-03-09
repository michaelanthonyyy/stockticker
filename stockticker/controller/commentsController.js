const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Comment.create(req.body)
            .then(dbModel => {
                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },

    findById: function(req, res) {
        db.Comment.find(req.params.id)
            .then(result => {
                res.json(result);
            });
    },

    updateById: function(req, res) {
        db.Comment.findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => {
                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));;
    }
}