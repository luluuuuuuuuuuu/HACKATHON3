/*import express  from "express"
import cors from 'cors'
//import router
import itemRoutes from './routes/routes.js'

const app = express()
const port = 39007
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/bestoffers', itemRoutes)

app.listen(port, ()=>{
    console.log("server running in "+port)})/*

    import express from "express";
import cors from 'cors';
import itemRoutes from './routes/routes.js';
import db from './database/db.js'; // Import the database connection

const app = express();
const port = 39007; // Use the port you want your server to run on

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/bestoffers', itemRoutes);

// The database connection is automatically established when importing 'db'
// So, you don't need to explicitly call db.connect() here.

app.listen(port, () => {
  console.log("Server running in " + port);
});*/
import express from "express";
import cors from 'cors';
import db from "./database/db.js";
import blogRoutes from './routes/routes.js';

const app = express();
const port = 3900;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/blog', blogRoutes); // Change this to '/blog'

app.listen(port, () => {
    console.log("server corriendo en el puerto " + port);
});


