//require commands file
var commands = require('./commands.js');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  if (cmd === 'pwd') {
    var userCommand = 'pwd';
  }
  else if (cmd === 'date') {
    var userCommand = 'date';
  } else if (cmd === 'ls'){
    var userCommand = 'ls';
  } else if (cmd.startsWith('echo')){
    var userCommand = 'echo';
    filename = data;
  } else if (cmd.startsWith('cat')){
    var userCommand = 'cat';
    filename = cmd.slice(4);
  }

  commands[userCommand](filename);
});
