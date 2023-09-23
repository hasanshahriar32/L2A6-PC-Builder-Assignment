// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://next-js-practice:iwooBXPvS4x61ruI@cluster0.dcb0xdp.mongodb.net/?retryWrites=true&w=majority";

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
    // await client.connect();
    console.log("mongo connected successfully ");
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    res.send({ data: "welcome to paradox tech" });
  } finally {
  }
}
export default dbConnection;
