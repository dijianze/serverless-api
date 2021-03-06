import { MongoClient } from 'mongodb'
import { NowRequest, NowResponse } from '@vercel/node';
const url = "mongodb+srv://root:DJZ7395@cluster0.5jh1e.mongodb.net/xyz?retryWrites=true&w=majority";

module.exports = async (req: NowRequest, res: NowResponse) => {
    const client = new MongoClient(url);
    const db = await client.db('xyz');
    var result = await db.collection("xyz").find().toArray();
    res.status(200).json(result);
}
