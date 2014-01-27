var redtape = require('redtape'),
    prompt = require('..');

var it = redtape();

it('should be able to return the PS1 variable for bash', function(t) {
  process.env['SHELL'] = 'bash';
  prompt(function (err, ps1) {
    t.notOk(err);
    t.ok(ps1.length > 1, 'Got a bash PS1');
    t.end();
  });
});

it('should be able to return the PS1 variable for zsh', function(t) {
  process.env['SHELL'] = 'zsh';
  prompt(function (err, ps1) {
    t.notOk(err);
    t.ok(ps1.length > 1, 'Got a zsh PS1');
    t.end();
  });
});

it('should be able to return the prompt variable for csh', function(t) {
  process.env['SHELL'] = 'csh';
  prompt(function (err, ps1) {
    t.notOk(err);
    t.ok(ps1.length > 1, 'Got a csh prompt');
    t.end();
  });
});

it('should be able to return the prompt variable for tcsh', function(t) {
  process.env['SHELL'] = 'tcsh';
  prompt(function (err, ps1) {
    t.notOk(err);
    t.ok(ps1.length > 1, 'Got a csh prompt');
    t.end();
  });
});

it('should be able to return a default prompt', function(t) {
  process.env['SHELL'] = 'tcsh';
  prompt(function (err, ps1) {
    t.notOk(err);
    t.ok(ps1.length > 1, 'Got a csh prompt');
    t.end();
  });
});
