
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://root:<password>@cluster0.5jh1e.mongodb.net/xyz?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
