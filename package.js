Package.describe({
  name: 'hugoduncan:winston-syslog',
  version: '0.1.0',
  summary: 'Meteor packaging wrapper for winston-syslog',
  git: 'https://github.com/hugoduncan/meteor-winston-syslog.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.addFiles('winston-syslog.js', ['server']);
  api.export('Winston','server');
  api.export('Winston_Syslog','server');
});

Npm.depends({
    "winston": "2.2.0",
    "winston-syslog": "1.2.1"});
