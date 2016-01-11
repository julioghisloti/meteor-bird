ServiceConfiguration.configurations.remove({ });
ServiceConfiguration.configurations.insert({
	service: Meteor.settings['FB_SERVICE'],
	appId: Meteor.settings['FB_APPID'],
	secret: Meteor.settings['FB_SECRET']
});