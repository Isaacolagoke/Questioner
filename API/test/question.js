//During the test the env variable is set to test
process.env.NODE_ENV = 'test';


let question = require('../app/models/question');



//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);

 /*
  * Test the /POST route
  */
 describe('/POST questions', () => {
	it('Should create a question for a specific meetup', (done) => {
		  chai.request(server)
		  .post('/questions')
		  .send(question)
		  .end((err, res) => {
			  res.should.have.status(200);
			  res.body.should.be.a('object');
			  res.body.should.be.a('array');  
			  res.body.errors.pages.should.have.property('status').eql('200');
			done();
		  });
	});
/*
  * Test the /PATCH route
  */
 describe('/PATCH upvotequestions', () => {
	it('Should upvote (increase votes by 1) a specific question. ', (done) => {
		  chai.request(server)
		  .patch('/questions/:6564/upvote')
		  .send(question)
		  .end((err, res) => {
			  res.should.have.status(200);
			  res.body.should.be.a('object');
			  res.body.should.be.a('array');  
			  res.body.errors.pages.should.have.property('status').eql('200');
			done();
		  });
});

/*
  * Test the /PATCH route
  */
 describe('/PATCH downvotequestions', () => {
	it('Should Downvote (decrease votes by 1) a specific question.', (done) => {
		  chai.request(server)
		  .patch('/questions/3423/downvote')
		  .send(question)
		  .end((err, res) => {
			  res.should.have.status(200);
			  res.body.should.be.a('object');
			  res.body.should.be.a('array');  
			  res.body.errors.pages.should.have.property('status').eql('200');
			done();
		  });
});





