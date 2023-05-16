const { MongoClient } = require("mongodb")

async function connect() {

    const url = "mongodb+srv://radhersc:rsc459960@cluster0.jbpgf8v.mongodb.net/";

    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log("database connected")


        await deleteSingle(client, "radhe")

        await deleteMultiple(client, "radhe")
    }
    catch (e) {
        console.error(e);
    }
    finally {
        await client.close()
    }
}

connect().catch(console.error);

//FOR DELETE ONE 

async function deleteSingle(client, matchpara) {
    const result = await client.db("newDb").collection("details").deleteOne({ name: matchpara });
    console.log(`${result.deletedCount} document deleted`)

}
//FOR DELETE MANY

async function deleteMultiple(client, matchpara) {
    const result = await client.db("newDb").collection("details").deleteMany({ name: matchpara });
    console.log(`${result.deletedCount} document deleted`)

}