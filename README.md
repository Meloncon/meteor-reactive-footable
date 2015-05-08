# meteor-reactive-footable

The goal of this smart package is to provide an easy (and Meteoric) way to redraw a Footable instance when a reactive change occurs to the contents it's displaying. Essentially, making footables reactive without the current boilerplate code one has to place on each templates' render callback.

## Installation
	meteor add meloncon:footable

Example:

	{{#footable}}
		<thead>
			<tr>
				<td>First Name</td>
				<td>Last Name</td>
			</tr>
		</thead>
		<tbody>
			{{#fooBody people}}
				<tr>
					<td>{{firstName}}</td>
					<td>{{lastName}}</td>
				</tr>
			{{/fooBody}}
		</tbody>
	{{/footable}}

You can pass any Footable top-level "data-" variables to the helper by simply providing them as context variables, like so:

	{{#footable data-sort=true}}
	{{/footable}}

For any Footable table header variables like, data-hide="", you can set those as you normally would:

	{{#footable data-sort=true}}
		<thead>
			<tr>
				<td data-toggle="true">First Name</td>
				<td data-hide="phone">Last Name</td>
			</tr>
		</thead>
		<tbody>
			{{#fooBody people}}
				<tr>
					<td>{{firstName}}</td>
					<td>{{lastName}}</td>
				</tr>
			{{/fooBody}}
		</tbody>
	{{/footable}}

## TODO

- Implement variable type checks
- Add package tests
- Add code to generate the HTML table markup for the header given certain parameters
