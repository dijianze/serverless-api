
import { MongoClient } from 'mongodb'
import { NowRequest, NowResponse } from '@vercel/node';
const uri = "mongodb+srv://root:<password>@cluster0.5jh1e.mongodb.net/xyz?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("xyz").collection("devices").find().toArray()
  // perform actions on the collection object
  client.close();
});

module.exports = async (req: NowRequest, res: NowResponse) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = await client.db('[xyz]');
    var result = await db.collection("[xyz]").find().toArray();
    res.status(200).json(result);
}
