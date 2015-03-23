Template.footable.rendered = function () {
	var self = this;
	var dataAttributes = Object.getOwnPropertyNames(Template.currentData());

	$.each(dataAttributes, function(index, value) {
		var table = self.find('.footable');

		$(table).attr(value, Template.currentData()[value]);
	});
};