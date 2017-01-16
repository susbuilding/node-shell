//require commands file
var commands = require('./commands.js');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  if (cmd === 'pwd') {
    var userCommand = 'pwd';
  } else if (cmd === 'date') {
    var userCommand = 'date';
  } else if (cmd === 'ls'){
    var userCommand = 'ls';
  } else if (cmd.startsWith('echo')){
    var userCommand = 'echo';
    filename = data;
  } else if (cmd.startsWith('cat')){
    var userCommand = 'cat';
    filename = cmd.slice(4);
  } else if (cmd.startsWith('head')){
    var userCommand = 'head';
    filename = cmd.slice(5);
  } else if (cmd.startsWith('tail')){
    var userCommand = 'tail';
    filename = cmd.slice(5);
  } else if (cmd.startsWith('sort')){
    var userCommand = 'sort';
    filename = cmd.slice(5);
  } else if (cmd.startsWith('wc')){
    var userCommand = 'wc';
    filename = cmd.slice(3);
  } else if (cmd.startsWith('uniq')){
    var userCommand = 'uniq';
    filename = cmd.slice(5);
  }

  commands[userCommand](filename);
});
