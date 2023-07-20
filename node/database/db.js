/*import mongoose from 'mongoose'
const url = 'mongodb://localhost:27017/techcycle'
mongoose.connect(url)

const db = mongoose.connection
db.on('open', ()=>{ console.log("Connected to MongoDB")} )
db.on('error', ()=>{ console.log("Error connecting to MongoDB")} )

export default db

import mongoose from 'mongoose';

const url = 'mongodb://localhost:27017/techcycle';

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB!');
});

db.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});

export default db;

import mongoose from 'mongoose';
const url = 'mongodb://localhost:39007/bestoffers';

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('open', () => {
  console.log("Connected to MongoDB");
});
db.on('error', () => {
  console.log("Error connecting to MongoDB");
});

export default db;*/

import mongoose from 'mongoose'
const url = 'mongodb://localhost:27017/techcycle'
mongoose.connect(url)

const db = mongoose.connection
db.on('open', ()=>{ console.log("¡Conectado a MongoDB!")} )
db.on('error', ()=>{ console.log("¡Error al conectar a MongoDB!")} )

export default db

