'use strict'
const ProductModels = require("../models/product");

class Product {
    create(req, res) {
        ProductModels.create(req.query, (err, hero) => {
            if (err) {
                res.json(err);
            } else {
                res.json(hero);
            }
        })
    }

    fetch(req, res) {
        ProductModels.find({}).sort({update_at: -1})
            .then(heros => {
                res.json(heros);
            })
            .catch(err => {
                res.json(err);
            });
    }

    find(req, res) {
        ProductModels.findById(req.params.id)
            .then(hero => {
                res.json(hero);
            })
            .catch(err => {
                res.json(err);
            });
    }

    findByStart(req, res) {
        ProductModels.findByStartPoint(req.params.start)
            .then(hero => {
                res.json(hero);
            })
            .catch(err => {
                res.json(err);
            });
    }

    findByApproach(req, res) {
        console.log(req.params.approach);
        ProductModels.where('approach').in([req.params.approach])
            .then(hero => {
                res.json(hero);
            })
            .catch(err => {
                res.json(err);
            });
    }

    update(req, res) {
        ProductModels.findOneAndUpdate(
            {_id: req.params.id},
            {
                $set: {
                    name: req.headers.name,
                    age: req.headers.age,
                    sex: req.headers.sex,
                    address: req.headers.address,
                }
            },
            {
                new: true
            }
        )
            .then(hero => res.json(hero))
            .catch(err => res.json(err));
    }

    delete(req, res) {
        ProductModels.findOneAndRemove({
            _id: req.params.id
        })
            .then(hero => res.send(`${hero.title}删除成功`))
            .catch(err => res.json(err));
    }
}

export default new Product()
