Package.describe({
  name: 'menu-generator',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'Generate Customisable Menu',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5');
  api.use(['ecmascript','blaze','templating']);
  api.addFiles(['menu-generator.html','menu-generator.js'], 'client');
  api.mainModule('listBuilder.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use(['practicalmeteor:chai','jquery','blaze','templating']);
  api.addFiles(['menu-generator.html','menu-generator.js'], 'client');
  api.mainModule('menu-generator-tests.js', 'client');
});
