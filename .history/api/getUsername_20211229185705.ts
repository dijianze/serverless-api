import { NowRequest, NowResponse } from '@vercel/node';
import { MongoClient } from 'mongodb'
const CONNECTION_STRING = "mongodb+srv://huangkemeng:[yourpassword]@clusterblog.engmb.azure.mongodb.net/admin";
module.exports = async (req: NowRequest, res: NowResponse) => {
    const client = await MongoClient.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = await client.db('[hkm-story]');
    var result = await db.collection("[northwind]").find().toArray();
    res.status(200).json(result);
}