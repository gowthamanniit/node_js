var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").find().limit(3).toArray(function(err, res) {
    if (err) throw err;
    console.log("limt 3 top record");
    console.log(res);
    db.close();
  });
});