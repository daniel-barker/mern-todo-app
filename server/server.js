import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/todoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
