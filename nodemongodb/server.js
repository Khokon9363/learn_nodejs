const mongoClient = require('mongodb').MongoClient

// const URL = 'mongodb+srv://amisakib:amisakib@cluster0.p3ijb.mongodb.net/nodejs_crud?retryWrites=true&w=majority'
const URL = 'mongodb+srv://amisakib:amisakib@cluster0.p3ijb.mongodb.net'

mongoClient.connect(URL, (err, myMongoClient) => {
    if(err){
        console.log(err)   
    } else {
        console.log(`Connected with the database`)
        // insert(myMongoClient)
        // get(myMongoClient)
        // destroy(myMongoClient)
        // update(myMongoClient)
        // replace(myMongoClient)
    }
})

function insert(myMongoClient) {
    let db = myMongoClient.db('nodejs_crud')
    let table = db.collection('users')

    let data = {
        name: 'Admin',
        phone: '0123456789',
        email: 'admin@gmail.com'
    }

    table.insertOne(data, (err, res) => {
        if(err){
            console.log(err)
        }else{
            console.log("Data inserted successfully")
            console.log(res)
        }
    })
}
function get(myMongoClient) {
    let db = myMongoClient.db('nodejs_crud')
    let table = db.collection('users')

    let query = {
        name: 'Admin'
    }
    let options = {
        sort: {
            phone: 1 // orderBy
        },
        projection: {
            _id: 0, // skip _id
            name: 1, // take name
            phone: 1 // take phone
        }
    }

    table.find(query, options).toArray((err, res) => {
        if(err){
            console.log(err)
        }else{
            console.log(res)
        }
    })
}

function destroy(myMongoClient) {
    let db = myMongoClient.db('nodejs_crud')
    let table = db.collection('users')

    let query = {
        name: 'User'
    }
    
    table.deleteOne(query, (err, res) => {
        if(err){
            console.log(err)
        }else{
            console.log("Data deleted successfully")
            console.log(res)
        }
    })
}
function update(myMongoClient) {
    let db = myMongoClient.db('nodejs_crud')
    let table = db.collection('users')

    let query = {
        name: 'User'
    }
    let options = {
        upsert: true // createOrUpdate
    }
    let newValue = {
        $set: {
            name: 'User updated'
        }
    }
    
    table.updateOne(query, newValue, options,(err, res) => {
        if(err){
            console.log(err)
        }else{
            console.log("Data updated successfully")
            console.log(res)
        }
    })
}
function replace(myMongoClient) {
    let db = myMongoClient.db('nodejs_crud')
    let table = db.collection('users')

    let query = {
        name: 'User updated 2'
    }
    let options = {
        upsert: true // createOrUpdate
    }
    let replacement = {
        name: 'User updated',
        phone: 123
    }
    
    table.replaceOne(query, replacement, options,(err, res) => {
        if(err){
            console.log(err)
        }else{
            console.log("Data replaced successfully")
            console.log(res)
        }
    })
}

/*
    Mongodb CRUD Methods

    1) insertOne, insertMany
    2) deleteOne, deleteMany
    3) find, find().limit(5)
    4) updateOne, updateMany, replaceOne
    5) find( { $text: { $search: "java coffee shop" } } )
    6) changeStream || Real time database changes
*/