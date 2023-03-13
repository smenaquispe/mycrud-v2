import express from 'express'
import morgan from 'morgan'
import { config } from 'dotenv';
import mongoose from 'mongoose'
import router from './routes/tasks.routes.js'
import cors from 'cors'

config();

const app = express();
const port = process.env.PORT || 9000;

app.use(cors())
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