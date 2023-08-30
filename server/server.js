import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import index from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/todoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


app.use(express.json());
app.use("/", index);
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
