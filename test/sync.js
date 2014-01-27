var redtape = require('redtape'),
    prompt = require('..');

var it = redtape();

it('(sync) should be able to return the PS1 variable for bash', function(t) {
  process.env['SHELL'] = 'bash';
  var ps1 = prompt.sync();
  t.ok(ps1.length > 1, 'Got a bash PS1');
  t.end();
});

it('(sync) should be able to return the PS1 variable for zsh', function(t) {
  process.env['SHELL'] = 'zsh';
  var ps1 = prompt.sync();
  t.ok(ps1.length > 1, 'Got a zsh PS1');
  t.end();
});

it('(sync) should be able to return the PS1 variable for csh', function(t) {
  process.env['SHELL'] = 'csh';
  var ps1 = prompt.sync();
  t.ok(ps1.length > 1, 'Got a csh PS1');
  t.end();
});

it('(sync) should be able to return the PS1 variable for tcsh', function(t) {
  process.env['SHELL'] = 'tcsh';
  var ps1 = prompt.sync();
  t.ok(ps1.length > 1, 'Got a tcsh PS1');
  t.end();
});

it('(sync) should be able to return a default prompt', function(t) {
  process.env['SHELL'] = 'nosh';
  var ps1 = prompt.sync();
  t.ok(ps1.length > 1, 'Got a default prompt');
  t.end();
});

it('(sync) should be able to customize the default prompt', function(t) {
  process.env['SHELL'] = 'nosh';
  var ps1 = prompt.sync('myprompt >');
  t.equal(ps1, 'myprompt >');
  t.end();
});
