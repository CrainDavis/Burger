// set up MySQL connection
var mysql = require("mysql");
var connection;

// set up JawsDB / local connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "r00tPa$$",
    database: "burgers_db"
  });
};

// make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// export connection for the ORM to use
module.exports = connection;