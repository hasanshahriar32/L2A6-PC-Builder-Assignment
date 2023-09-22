// export default function handler(req, res) {
//   const { pid } = req.query;
//   res.end(`Post: ${pid}`);
// }

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function dbConnection(req, res) {
  try {
    await client.connect();
    console.log("mongo connected successfully ");
    const categoryCollection = client.db("paradox").collection("category");
    const { id } = req.query;
    if (req.method === "GET") {
      console.log(id);
      const news = await categoryCollection.findOne({
        category_id: parseInt(id),
      });
      res.send({ message: "success", status: 200, data: news });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error", status: 500 });
  } finally {
    await client.close();
  }
}
export default dbConnection;
