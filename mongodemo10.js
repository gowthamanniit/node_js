var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("stud1");
var oldvalue={mark : 12};
var updateqry={$set:{mark:100,name:'ajay krishnan'}};
  dbo.collection("stud1").updateOne(oldvalue,updateqry,function(err, res) {
    if (err) throw err;
    console.log("update one record");
    console.log(res);
    db.close();
  });
});