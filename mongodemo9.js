var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("stud1");
//var qry={mark : {$lt:50}};
var delqry={mark:{$gt:50}};
  dbo.collection("stud1").deleteMany(delqry,function(err, res) {
    if (err) throw err;
    console.log("deleted many record");
    console.log(res);
    db.close();
  });
});