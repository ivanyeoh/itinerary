Meteor.Router.add({
	'/': 'app'
})

Template.body.helpers({
	layoutName: function() {
		switch (Meteor.Router.page()) {
			case 'app':
  				return 'app';
			default:
  				return 'app';
		}
	}
});
