const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const express = require("express"); //1
const app = express(); //2
//extra
require("dotenv").config();

const port = process.env.PORT || 5000; //3
//username:GeniusUser
//pass:EmisQ8gCJi0Y88s2

//for middle-wire
const cors = require("cors");
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ded74.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const serviceCollection = client.db("GeniusCar").collection("service");

    //read multiple
    app.get("/service", async (req, res) => {
      const query = {};
      const cursor = serviceCollection.find(query);
      const services = await cursor.toArray();
      console.log("connect to get api");
      res.send(services);
    });
    //read single
    app.get("/service/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const query = { _id: ObjectId(id) };
      const service = await serviceCollection.findOne(query);
      res.send(service);
    });

    //add service
    app.post("/service", async (req, res) => {
      const newService = req.body;
      console.log("new service adding: ", newService);
      const result = await serviceCollection.insertOne(newService);
      res.send(result);
    });
    //delete service
    app.delete("/service/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await serviceCollection.deleteOne(query);
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  //4
  res.send("success");
});

app.listen(port, () => {
  console.log("listening to port");
});
