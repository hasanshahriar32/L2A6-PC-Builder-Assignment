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
    const { product_image } = req.query;

    if (req.method === "GET") {
      const products = await categoryCollection.findOne({
        "products": {
          $elemMatch: { "product_image": product_image }
        }
      });

      if (!products) {
        res.status(404).json({ message: "Product not found", status: 404 });
      } else {
        // Return only the matching product, not the entire array
        const matchingProduct = products.products.find(
          (product) => product.product_image === product_image
        );
        res.send({ message: "success", status: 200, data: matchingProduct });
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
