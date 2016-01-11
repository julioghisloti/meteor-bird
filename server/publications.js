Meteor.autorun(function (){

	Meteor.publish('posts', function(_id){
		var timilineIds = Friendship.timilineIds(_id);
		return Posts.list(timilineIds);
	});

	Meteor.publish('friendship', function(_id){
		return Friendship.followersAndFollowings(_id);
	})

	Meteor.publish('isFollowing', function(_id){
		return Friendship.isFollowing(_id);
	});

	Meteor.publish('user', function(_id){
		return Meteor.users.find({_id: _id});
	})

});