const knex = require('knex');
const dotenv = require("dotenv");

dotenv.config();

const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT} = process.env;

const db = knex({
    client: 'pg',
    connection: {
        host: PGHOST,
        port: PGPORT,
        user: PGUSER,
        database: PGDATABASE,
        password: PGPASSWORD
    }
});

async function getVersion(){
    try{
        const result = await db.raw("select version()");
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
// getVersion()

// db("products")
//     .select("id", "name", "price")
//     // .where({id:1})
//     //same
//     //.where("id", 1)
//     .where("id", ">", 1)
//     .then((rows)=> {
//         console.log(rows);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// db("products")
//     .update({name: 'iPhone16'},["id", "name"])//returning
//     .where({id:1})
//     // .returning('*')
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// db("products")
//     .insert([
//         {name: 'iPhone21', price:8000},
//         {name: 'iPad21', price: 7000}
//     ],['id', 'name', 'price']//returning
//     )
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
    
// db("products")
//     .where({id:2})
//     .del()
//     .returning('*')
//     .then((result) => {
//         console.log(result);
//     })

db.raw("select * from products")
.then((result) => {
    console.log(result.rows);
});