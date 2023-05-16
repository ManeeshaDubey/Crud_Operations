const { MongoClient } = require("mongodb")

async function connect() {

    const url = "mongodb+srv://radhersc:rsc459960@cluster0.jbpgf8v.mongodb.net/";

    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log("database connected")


        await updateSingle(client, "shyam", { age: 22, address: "delhi" })

        await updateMore(client, "radhe", { age: 22, address: "delhi" })

    }
    catch (e) {
        console.error(e);
    }
    finally {
        await client.close()
    }
}

connect().catch(console.error);

//updateOne function

async function updateSingle(client, matchname, updatevalue) {
    const result = await client.db("newDb").collection("details").updateOne({ name: matchname }, { $set: updatevalue });
    console.log(`${result.matchedCount} matched the criteria`)
    console.log(`${result.modifiedCount} documents were updated`)
}

//updateMany function

async function updateMore(client, matchname, updatevalue) {
    const result = await client.db("newDb").collection("details").updateMany({ name: matchname }, { $set: updatevalue });
    console.log(`${result.matchedCount} matched the criteria`)
    console.log(`${result.modifiedCount} documents were updated`)
}