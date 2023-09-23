const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URI;

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
    console.log("MongoDB connected successfully");
    const categoryCollection = client.db("paradox").collection("product");
    const { product_name } = req.query;

    if (req.method === "GET") {
      const products = await categoryCollection.find({
        "products": {
          $elemMatch: { "product_name": product_name }
        }
      }).toArray();

      if (products.length === 0) {
        res.status(404).json({ message: "Product not found", status: 404 });
      } else {
        res.send({ message: "success", status: 200, data: products });
      }
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error", status: 500 });
  } finally {
    await client.close();
  }
}

export default dbConnection;
