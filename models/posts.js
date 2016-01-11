Post = new Meteor.Collection('posts');

Post.publish = function (mesage){
	this.insert({
		mesage: mesage,
		date: new Date(),
		userId: Meteor.userId()
	});
}

Post.publish = function(mesage, name){
	var params = {
		mesage: mesage,
		time: new Date(),
		userId: Meteor.userId(),
		name: name
	};
	
	this.insert(params);
}

Post.list = function(userIds){
	return this.find(
		{userId: {'$in': userIds}},
		{sort: {time: -1, name: 1}}
	);
}