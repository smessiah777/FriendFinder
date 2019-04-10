var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "dog_db"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

//declare functions for querying the db and finding match

module.exports = function(app) {
  //get route for all profiles
  app.get("/api/profiles", function(req, res) {
    connection.query("SELECT * FROM dog_profiles;", function(err, data) {
      if (err) throw err;
      console.log("current heist dogs:", data);

      res.json(data);
    });
  });
  //post route to add new profiles
  app.post("/api/profiles", function(req, res) {
    //when posting new user data, also use that data to find match
    //split function score numbers
  });
};
