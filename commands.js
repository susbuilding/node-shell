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
    }
}
