let meetup = require('../models/meetup');

/*
 * GET /meetup route to Fetch all meetup records.
 */
function getMeetups(req, res) {
	//Creates a new meetup
	res.json({status: 200, data: [meetup]});
}

/*
 * POST /meetup to post a new meetup.
 */
function postMeetup(req, res) {
	//Creates a new meetup
	res.json({status: 200, data: [meetup]});
}

/*
 * GET /Fetch a specific meetup record.
 */
function getMeetupId(req, res) {
	//Fetch a specific meetup record
	res.json({status: 200, data: [meetup]});
}
/*
 * GET /Fetch all upcoming meetup records.
 */
function getUpcomingMeetups(req, res) {
	//Fetch Fetch all upcoming meetup records.
	res.json({status: 200, data: [meetup]});
}

/*
 * POST /Respond to meetup RSVP
 */
function postMeetupRsvps(req, res) {
	// Respond to meetup RSVP
	res.json({status: 200, data: [meetup]});
}



//export all the functions
module.exports = { getMeetups, postMeetup, getMeetupId,getUpcomingMeetups,postMeetupRsvps };