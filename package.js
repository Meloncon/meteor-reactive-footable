Package.describe({
  name: 'meloncon:footable',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'Responsive HTML Table for Meteor',
  description: 'Responsive HTML Table for Meteor',
  homepage: 'https://github.com/Meloncon/meteor-reactive-footable',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Meloncon/meteor-reactive-footable.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  author: 'Matt Meloncon <mmeloncon@gmail.com>'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.2');
  api.use('mrt:footable');
  api.use('templating');
  //api.addFiles('footable.js');
  api.addFiles(['footable.html','footable.js'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('meloncon:footable');
  api.addFiles('footable-tests.js');
});
