Package.describe({
  name: 'nodexpert:menu-generator',
  version: '0.0.1',
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
  api.use(['ecmascript','blaze@2.3.2','templating@1.3.2']);
  api.addFiles(['menu-generator.html','menu-generator.js'], 'client');
  api.mainModule('customisableTable.js');
});
