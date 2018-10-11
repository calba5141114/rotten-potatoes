const MovieDb = require('moviedb-promise');
const moviedb = new MovieDb('bad0b436d479f4942e389a470614ecec');

module.exports = function (app) {

    app.get('/', (_req, _res) => {

        moviedb.miscNowPlayingMovies()
            .then(response => {
                _res.render('movies-index', { movies: response.results });
            })
            .catch(err => { throw err; })

    });

    app.get('/movies', (_req, _res) => {
        // Todo()
    });

    app.get('/movies/:id', (_req, _res) => {

        moviedb.movieInfo({ id: _req.params.id }).then(movie => {

            function renderTemplate(movie) {
                _res.render('movies-show', { movie: movie });
            }

            // checking to see if the movie has a trailer.
            if (movie.video) {
                moviedb.movieVideos({ id: _req.params.id }).then(videos => {
                    movie.trailer_youtube_id = videos.results[0].key;
                    renderTemplate(movie);
                })
            } else {
                renderTemplate(movie);
            }

        }).catch(err => {
            throw err;
        });

    });

}

