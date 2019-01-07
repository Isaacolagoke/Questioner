let question = require('../models/question');


/*
 * POST /Create a question for a specific meetup.
 */
function postQuestion(req, res) {
	//Create a question
	res.json({status: 200, data: [question]});
}

/*
 * PATCH /Upvote (increase votes by 1) a specific question.
 */
function upvoteQuestion(req, res) {
   //Upvote a question
	res.json({status: 200, data: [question]});	
}

/*
 * PATCH /Downvote (decrease votes by 1) a specific question.
 */
function downvoteQuestion(req, res) {
    //Upvote a question
	res.json({status: 200, data: [question]});	
}



//export all the functions
module.exports = { postQuestion, upvoteQuestion, downvoteQuestion };
