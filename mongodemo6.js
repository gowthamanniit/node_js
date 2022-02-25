var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("stud1");
var qry={mark : {$lt:50}};
  dbo.collection("stud1").find(qry).toArray(function(err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  });
});