const express = require("express");
const userRoutes= require('./routers/user');
const sequelize = require("./util/database");
const app = express();

const cors = require('cors');


// Enable CORS for all routes
app.use(cors());

const port = 3000;
//app.use(cors());
app.use(express.json());

//const dotenv= require('dotenv');
//dotenv.config();

app.use('/user', userRoutes)



sequelize.sync()
   .then(() => {
    app.listen(3000);
   })
   .catch(err=>
    {
        console.log(err);
    })

   