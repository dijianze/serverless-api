import { NowRequest, NowResponse } from '@vercel/node';
import { MongoClient } from 'mongodb'
const CONNECTION_STRING = "mongodb+srv://root:<DJZ7395>@cluster0.5jh1e.mongodb.net/xyz";
module.exports = async (req: NowRequest, res: NowResponse) => {
    const client = await MongoClient.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = await client.db('[xyz]');
    var result = await db.collection("[xyz]").find().toArray();
    res.status(200).json(result);
}