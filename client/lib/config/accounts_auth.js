//pt br
//accountsUIBootstrap3.setLanguage('pt-PT');

Accounts.ui.config({
	extraSignupFields: [{
		fieldName: 'name',
		fieldLabel: 'Nome'
	}],
	requestPermissions: {
		facebook: ['email', 'user_about_me']
	}
});