var databaseURI = "localhost:27017/somedb";
var collections = ["users"];
var db = require("mongojs").connect(databaseURI, collections);

module.exports = db;