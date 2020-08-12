const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
                .then(db => { console.log("Base de datos conectada")}) 
                .catch(err => console.error(err))