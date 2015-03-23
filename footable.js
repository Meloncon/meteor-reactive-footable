Template.footable.rendered = function () {
	var self = this;
	var dataAttributes = Object.getOwnPropertyNames(Template.currentData());

	$.each(dataAttributes, function(index, value) {
		var table = self.find('.footable');

		$(table).attr(value, Template.currentData()[value]);
	});
};

Template.fooBody.helpers({
	mapped: function (arr) {
		var mappedArray = arr.map(function (item, index) {
			item.$last = index === arr.length-1;
			return item;
		});

		return mappedArray || [];
	},
	redrawFootable: function () {
		
	}
});