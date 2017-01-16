var fs = require('fs');

var exports = module.exports = {
    pwd: function() {
        // pwd code
        process.stdout.write(process.cwd());

        // process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    },


    date: function(){
        process.stdout.write(Date());
        //this is the same output as above
        // var currDate = new Date();
        // var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        // var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        // process.stdout.write(daysOfWeek[currDate.getDay()] + ' ' + months[currDate.getMonth()] + ' ' + currDate.getDate() + ' ' + currDate.getHours() + ':' + currDate.getMinutes() + ':' + currDate.getSeconds() + ' EST ' + currDate.getFullYear());
    },

    ls: function(){
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
                process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("prompt > ");
        });
    },

    echo: function(filename){
        var output = filename.slice(5);
        process.stdout.write(output.toString().trim());
        process.stdout.write('\nprompt > ');

    },

    cat: function(filename){
        fs.readFile(filename, 'utf8', (err,data) => {
            if (err) throw err;
            process.stdout.write(data);
            process.stdout.write("prompt > ");
        });
    },

    head: function(filename){
        fs.readFile(filename, 'utf8', (err,data) => {
            if (err) throw err;
            var lines = data.split('\n');
            for (var i = 0; i < 5; i++) {
                process.stdout.write(lines[i] + '\n');
            }
            process.stdout.write("prompt > ");
        });
    },

    tail: function(filename){
        fs.readFile(filename, 'utf8', (err,data) => {
            if (err) throw err;
            var lines = data.split('\n');
            for (var i = lines.length - 6; i < lines.length - 1; i++) {
                process.stdout.write(lines[i] + '\n');
            }
            process.stdout.write("prompt > ");
        });
    },

    sort: function(filename){
        fs.readFile(filename, 'utf8', (err,data) => {
            if (err) throw err;
            var lines = data.split('\n');
            process.stdout.write(lines.sort().join('\n'));
            process.stdout.write("prompt > ");
        });
    },

    wc: function(filename){
        fs.readFile(filename, 'utf8', (err,data) => {
            if (err) throw err;
            var lines = data.split('\n');
            process.stdout.write(lines.length.toString() + '\n');
            process.stdout.write("prompt > ");
        });
    },

    uniq: function(filename){
        fs.readFile(filename, 'utf8', (err,data) => {
            if (err) throw err;
            var lines = data.split('\n');
            for (var i = 1; i < lines.length; i++) {
                if (lines[i] !== lines[i-1]) {
                    process.stdout.write(lines[i] + '\n');
                }
            }
            process.stdout.write("prompt > ");
        });
    }
}
