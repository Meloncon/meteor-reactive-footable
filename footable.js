Template.footable.rendered = function () {
	var self = this;
	var dataAttributes = Object.getOwnPropertyNames(Template.currentData());
	var table = self.find('.footable');

	$.each(dataAttributes, function(index, value) {
		$(table).attr(value, Template.currentData()[value]);
	});

	console.log('Initializing Footables...');
	$(table).footable();
};

Template.fooBody.rendered = function () {
	//console.log('Redrawing Footables');
	//$('.footable').trigger('footable_redraw');
};

Template.fooBody.helpers({
	mapped: function (arr) {
		console.log(arr);
		var mappedArray = arr.map(function (item, index) {
			item.$last = index === arr.length-1;
			return item;
		});

		return mappedArray || [];
	},
	redrawFootable: function () {
		console.log('Redrawing Footables via Helper');
		$('.footable').trigger('footable_redraw');
	}
});