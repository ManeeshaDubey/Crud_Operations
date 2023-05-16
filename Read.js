const { MongoClient } = require("mongodb")

async function connect() {

    const url = "mongodb+srv://ManeeshaDubey:yvnHKKtMcOJIm8H8@cluster0.ke1we9w.mongodb.net/";

    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log("database connected")



        await ReadOne(client, "shyam")

        // await ReadMany(client, { age: 10, address: "hyderabad" })

    }
    catch (e) {
        console.error(e);
    }
    finally {
        await client.close()
    }
}

connect().catch(console.error); connect().catch(console.error);

//READ ONE FUNCTION

async function ReadOne(client, Documentname) {
    const result = await client.db("newDb").collection("details").findOne({ name: Documentname });

    if (result) {
        console.log("document found:")
        console.log(result)
    }
    else {
        console.log("document not found")
    }

}

//READ MANY FUNCTION

async function ReadMany(client, {
    age = 0,
    address = ""
}) {
    const resultfn = await client.db("newDb").collection("details").find({ age: { $gte: 10 }, address: "hyderabad" });
    const result = await resultfn.toArray()
    console.log(result)


}