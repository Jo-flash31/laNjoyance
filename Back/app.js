const express = require('express');
const ENV = require('./config/env')
const cors = require('cors');
const app = express();
const connectMongoDB = require('./config/dbmongo');
const userRouter = require('./router/user.router');
const productRoutes = require('./router/product.router');
const commandeRoutes = require('./router/commande.router');
const requestLogger = require('./middlewares/requestLogger');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(requestLogger);
app.use(cors({
  origin: 'http://localhost:5173', // L'URL de votre frontend
  credentials: true // Permet l'envoi des cookies
}));
app.use(cookieParser());

connectMongoDB(ENV.MONGO_URI, ENV.DB_NAME);

app.use('/api/user', userRouter);
app.use('/api/product', productRoutes);
app.use('/api/commande', commandeRoutes); 

// Tes URL API PREFIX

module.exports = app ;
