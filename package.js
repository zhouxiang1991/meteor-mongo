Package.describe({
  name: 'zhoux:meteor-mongo',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'improve mongo to meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:zhouxiang1991/meteor-mongo.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
});
documentation: 'README.md'

Package.onUse(function(api) {
  api.versionsFrom('1.6.0.1');
  api.use('ecmascript');
  api.use('meteorhacks:aggregate@1.3.0');
  api.use('fongandrew:find-and-modify@1.0.0');
  api.use('mongo');
  api.mainModule('meteor-mongo.js');
});
