const { MongoClient } = require("mongodb")

async function connect() {

    const url = "mongodb+srv://ManeeshaDubey:yvnHKKtMcOJIm8H8@cluster0.ke1we9w.mongodb.net/";

    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log("database connected")

        await createOp(client, {
            name: "shyam",
            age: 22,
            address: "hyderabad"
        })

        // await createMany(client, [{
        //     Bookname: "abcd",
        //     author: "abcd"
        // },
        // {
        //     game: "cricket",
        //     players: 11
        // }])





    }
    catch (e) {
        console.error(e);
    }
    finally {
        await client.close()
    }
}

connect().catch(console.error);

// INSERTMANY FUNCTION 

async function createMany(client, documentList) {
    const result = await client.db("newDb").collection("InsertMany").insertMany(documentList);
    // console.log(result.insertedCount)
    // console.log(result.insertedIds)

}

// INSERTONE FUNCTION 

async function createOp(client, document) {
    const result = await client.db("newDb").collection("details").insertOne(document);
    console.log("new id" + result.insertedId)
}