
let express = require('express');
let app = express();
let morgan = require('morgan');
let bodyParser = require('body-parser');
let port = 8080;
let config = require('config'); //we load the db location from the JSON files
let meetup = require('./app/routes/meetup');
let question = require('./app/routes/question');


//don't show the log when it is test
if(config.util.getEnv('NODE_ENV') !== 'test') {
	//use morgan to log at command line
	app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}

//parse application/json and look for raw text                                        
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  

app.get("/", (req, res) => res.json({message: "Welcome to Questioner!"}));

app.route("/v1/meetups")
	.get(meetup.getMeetups)
	.post(meetup.postMeetup);

app.route("/v1/meetups/:id")
	.get(meetup.getMeetupId)

app.route("/v1/meetups/upcoming")
	.get(meetup.getUpcomingMeetups)

app.route("/v1/questions")
	.post(question.postQuestion)

app.route("/v1/questions/:question_id/upvote")
	.patch(question.upvoteQuestion)

app.route("/v1/questions/:question_id/downvote")
	.patch(question.downvoteQuestion)

app.route("/v1/meetups/:meetup_id/rsvps")
	.post(meetup.postMeetupRsvps)





		


app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing