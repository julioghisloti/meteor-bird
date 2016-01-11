Meteor.methods({
	followUser: function (friendId){
		Friendship.follow(friendId);
	},
	unfollowUser : function (friendId){
		Friendship.unfollow(friendId);
	},
	perfilUpdate: function(name, about){
		Meteor.users.update(
			{_id: this.userId},
			{$set: {
				'profile.name': name,
				'profile.about': about
			}}
		);
	},
	publishPost: function(mesage, name){
		Post.publish(mesage, name);
	}
});