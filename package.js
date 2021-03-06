Package.describe({
  name: 'nodexpert:menu-generator',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'Generate Customisable Menu',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/nodexpertsdev/menu-generator.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5');
  api.use(['ecmascript','blaze@2.3.2','templating@1.3.2']);
  api.addFiles(['menu-generator.html','menu-generator.js'], 'client');
  api.mainModule('listBuilder.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use(['practicalmeteor:chai@2.1.0','jquery@1.11.10','blaze@2.3.2','templating@1.3.2']);
  api.addFiles(['menu-generator.html','menu-generator.js'], 'client');
  api.mainModule('menu-generator-tests.js', 'client');
});
