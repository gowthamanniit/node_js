var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
var oldvalue={mark : {$gt:50}};
var updateqry={$set:{mark:100}};
  dbo.collection("customers").updateMany(oldvalue,updateqry,function(err, res) {
    if (err) throw err;
    console.log("update many record");
    console.log(res);
    db.close();
  });
});