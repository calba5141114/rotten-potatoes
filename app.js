const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const express = require('express')
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const app = express()
const reviews = require('./controllers/reviews.js');
const movies = require('./controllers/movies.js');

try {
    mongoose.connect(process.env.MONGODB_URI || 'mongodb://moot:zuccismoot12@ds253889.mlab.com:53889/palyhacks', { useNewUrlParser: true });
}
catch (err) {
    throw err;
}

app.use(bodyParser.urlencoded({ extended: true }));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(methodOverride('_method'))

// calling the main function from controllers/reviews.js on the app instance.
reviews(app)
// calling the main function from controllers/movies.js on the app instance
movies(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
})

