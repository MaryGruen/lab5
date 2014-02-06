var data = require("../data.json");

exports.addFriend = function(req, res) {    
	res.render('add', data);
	var newName = req.query.name;
	var newDesc = req.query.description;
	var newFriend = {};
	newFriend.name = newName;
	newFriend.description = newDesc;
	newFriend.imageURL = "http://lorempixel.com/400/400/people";
	console.log("newFriend" + newFriend);
	data["friends"].push(newFriend);
 }