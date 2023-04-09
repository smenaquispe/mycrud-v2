import express from 'express'
import morgan from 'morgan'
import { config } from 'dotenv';
import mongoose from 'mongoose'
import router from './routes/tasks.routes.js'
import cors from 'cors'
import compression from 'compression'
import helmet from 'helmet'

config();

const app = express();
const port = process.env.PORT || 4000;

const corsOrigin =  {
    origin: ['http://localhost:5173', 'https://mycrud-v2-production.up.railway.app']
  };
  

app.use(compression())
app.use(helmet())
app.use(cors(corsOrigin))
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/tasks',router)

mongoose.connect(process.env.MONGODB_URI)
.then(res => console.log('Connected to mongodb'))
.catch(err => console.error('Error connecting to mongodb: ' + err ))


app.listen(port, () => {
    console.log('listenning on port ' + port)
})