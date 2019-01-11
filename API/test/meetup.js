//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let meetup = require('../app/models/meetup');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);


 /*
  * Test the /GET route
  */
  describe('/GET meetups', () => {
	  it('it should GET all the meetups', (done) => {
			chai.request(server)
		    .get('/meetups')
		    .end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				res.body.data.should.be.a('array');
				res.body.should.have.property('status').eql(200);
		      done();
		    });
	  });
  });

 /*
  * Test the /POST route
  */
  describe('/POST meetups', () => {
	  it('it should Create a ​meetup​​ record', (done) => {
			chai.request(server)
		    .post('/meetups')
		    .send(meetup)
		    .end((err, res) => {
			  	res.should.have.status(200);
				res.body.should.be.a('object');
				res.body.should.be.a('array');  
		      done();
		    });
	  });
/*
  * Test the /GET route
  */
	  describe('/GET meetups', () => {
		it('it should Fetch a specific ​meetup​​ record', (done) => {
			  chai.request(server)
			  .get('/meetups')
			  .send(meetup)
			  .end((err, res) => {
					res.should.have.status(200);
				  res.body.should.be.a('object');
				  res.body.should.be.a('array');  
				done();
			  });
		});
/*
  * Test the /GET route
  */
		describe('/GET meetups', () => {
			it('fetch all ​upcoming​​ ​meetup​​ records', (done) => {
				  chai.request(server)
				  .get('/meetups/upcoming')
				  .send(meetup)
				  .end((err, res) => {
						res.should.have.status(200);
					  res.body.should.be.a('object');
					  res.body.should.be.a('array');  
					done();
				  });
			});

	/*
  * Test the /POST route
  */
 describe('/POST meetups/3322/rsvps', () => {
	it('Should Respond to meetup RSVP', (done) => {
		  chai.request(server)
		  .post('/meetups/1233/rsvps')
		  .send(meetup)
		  .end((err, res) => {
			  res.should.have.status(200);
			  res.body.should.be.a('object');
			  res.body.should.be.a('array');  
			done();
		  });
});
	
	






  