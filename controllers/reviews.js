//review.js
const Review = require('../models/reviews')

module.exports = function (app) {

    // // NEW
    app.get('/reviews/new', (_req, _res) => {

        console.log(_req.body);
        _res.render('reviews-new', {});

    });

    // CREATE
    app.post('/reviews', (_req, _res) => {

        Review.create(_req.body).then((review) => {
            console.log(review);
            _res.redirect(`/reviews/${review._id}`) // Redirect to reviews/:id
        }).catch((err) => {
            throw err;
        });

    });

    // SHOW
    app.get('/reviews/:id', (_req, _res) => {

        Review.findById(_req.params.id).then((review) => {
            _res.render('reviews-show', { review: review })
        }).catch((err) => {
            throw err;
        })

    });

    // EDIT
    app.get('/reviews/:id/edit', function (_req, _res) {

        Review.findById(_req.params.id, function (err, review) {
            if (err) throw err;
            _res.render('reviews-edit', { review: review });
        });

    });

    // UPDATE
    app.put('/reviews/:id', (_req, _res) => {

        Review.findByIdAndUpdate(_req.params.id, _req.body)
            .then(review => {
                _res.redirect(`/reviews/${review._id}`);
            }).catch(err => {
                throw err;
            });

    });

    // DELETE
    app.delete('/reviews/:id', function (_req, _res) {

        Review.findByIdAndRemove(_req.params.id).then((review) => {
            _res.redirect('/');
        }).catch((err) => {
            throw err;
        });
    });
    
}