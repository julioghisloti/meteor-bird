Post = new Meteor.Collection('posts');

Post.publish = function (message){
	var currentUser = Meteor.user();
	var params = {
		message: message,
		time: new Date(),
		userId:  currentUser._id,
		name: currentUser.profile.name
	};
	this.insert(params);
	winston.info("Post.publish: ", params);
}

Post.publish = function(message, name){
	var params = {
		message: message,
		time: new Date(),
		userId: Meteor.userId(),
		name: name
	};
	
	this.insert(params);
}

Post.list = function(userIds){
	return this.findFaster(
		{userId: {'$in': userIds}},
		{sort: {time: -1, name: 1}}
	);
}