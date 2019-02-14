
// data being pulled in to populate the api
const friendData = require("../data/friends");

// routes for the server
module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function (req, res) {

    // changes scores that are sent in as string into integers for calculations
    const scores = req.body.scores;
    if (scores) {
      for (let i = 0; i < scores.length; i++) {
        let num = parseInt(scores[i]);
        scores[i] = num;
      };
      friendData.push(req.body);
      res.json(true);
    }
  });
};
