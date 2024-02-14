import app from './app.js';
import dbconnection from './db/dbconn.js';

import dotenv from"dotenv"
 dotenv.config({path:"./.env"})
// Connect to MongoDB
dbconnection()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) =>{ 
    console.log("MONGO db connection failed !!! ", err);
})