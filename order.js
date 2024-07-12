const { MongoClient } = require('mongodb');
async function main() 
{
    
const url = "mongodb+srv://<dusanapudisarayu007>:<smvec2003>@<mongodb+srv://dusanapudisarayu007:<password>@restaurant.jcmpw5h.mongodb.net/

 const client = new MongoClient(uri);
 await client.connect();
 await listDatabases(client);
 try {
    await client.connect();

    await listDatabases(client);

} catch (e) {
    console.error(e);
}
finally {
    await client.close();
}
main().catch(console.error);
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${restaurant}`));
    alert("order placed");
}; 
