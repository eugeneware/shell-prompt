var exec = require('child_process').exec;

module.exports = function (cb) {
  var shell = process.env['SHELL'];
  var parts = shell.split('/');
  if (parts && parts.length) {
    var shellExe = parts[parts.length - 1];
    var args = '';

    switch (shellExe) {
      case 'bash':
      case 'zsh':
      case 'sh':
        args = ' -l -i -c \'echo $PS1\'';
        break;

      case 'tcsh':
      case 'csh':
        args = ' -c \'echo $prompt\'';
        break;

      default:
        return cb(null, '$ ');
    }

    exec(process.env['SHELL'] + args, function (err, stdout, stderr) {
      if (err) return cb(null, '$ ');
      cb(null, stdout);
    });
  }
};
