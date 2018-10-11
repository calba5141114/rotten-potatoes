// test-reviews.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
const Review = require('../models/reviews');

chai.use(chaiHttp);

// tell mocha you want to test Reviews (this string is taco)
describe('Reviews', () => {
        // make taco name for test
        // TEST INDEX
        it('should index ALL reviews on / GET', (done) => {
            // use chai-http to make a request to your server
            chai.request(server)
                // send a GET request to root route
                .get('/')
                // wait for response 
                .end((err, res) => {
                    // check that the response status is = 200 (success)
                    res.should.have.status(200);
                    // check that the response is a type of html
                    res.should.be.html;
                    // end this test and move onto next
                    done();
                });
        });

        // TEST NEW
        // TEST CREATE
        // TEST SHOW
        // TEST EDIT
        // TEST UPDATE
        // TEST DELETE
});

