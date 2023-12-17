// var mysql = require('mysql');
// var conn = mysql.createConnection({
//  host: 'localhost', // assign your host name
//   user: 'root',      //  assign your database username
//   password: '',      // assign your database password
//   database: 'aadhar' // assign database Name
// }); 
// conn.connect(function(err) {
//   if (err) throw err;
//   console.log('Database is connected successfully !');
// });
// module.exports = conn;


var mysql = require('mysql');
var conn = mysql.createConnection({
host:  'byte-brigade-db.chsqisisezlz.ap-south-1.rds.amazonaws.com',
user:  'root',
password:  'codeAMC123',
database:  'votingdatabase',

}); 
conn.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
});
    module.exports = conn;
port=3306

