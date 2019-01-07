//Meetup schema definition
let MeetupSchema = {
  id: 1,
  createdOn: new Date(),
  location: "Lagos",
  images: ["https://avatars1.githubusercontent.com/u/43650022?v=4?v=3&s=96", "https://avatars1.githubusercontent.com/u/43650022?v=4?v=3&s=96"],
  topic: "AI Saturdays Lagos",
  happeningOn: new Date(), 
  tags: ["ai", "lagos", "tech", "meetup"]  
  }
  
  //Exports the MeetupSchema for use elsewhere.
  module.exports = MeetupSchema;
