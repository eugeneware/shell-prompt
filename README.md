# shell-prompt

Get the PS1 or prompt variable based on your shell type

## Installation

This module is installed via npm:

``` bash
$ npm install shell-prompt
```

## Example Usage

### Asynchronous version

``` js
var prompt = require('shell-prompt');
prompt(function (err, ps1) {
  // ps1 will be the PS1 variable for bash,sh,zsh
  //     or the 'prompt' variable for csh,tcsh
  //     or default to '$ ' if not set
});
```

### Synchronous version

``` js
var prompt = require('shell-prompt');
var ps1 = prompt.sync();
// ps1 will be the PS1 variable for bash,sh,zsh
//     or the 'prompt' variable for csh,tcsh
//     or default to '$ ' if not set
});
```
