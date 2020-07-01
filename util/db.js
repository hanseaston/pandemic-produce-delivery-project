const { Db } = require("mongodb");

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://Hans:shop@shop.ozkkk.mongodb.net/shop?retryWrites=true&w=majority";
let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(uri)
    .then((client) => {
      console.log("Mongo DB connected");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "no database connected";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
