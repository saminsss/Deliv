const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require('dotenv').config();

//Setup environment/port
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

//Connect database then listen on port
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser : true, useCreateIndex : true, useUnifiedTopology: true }, console.log("MongoDB database connected"))
    .then(() => app.listen(port, () => {console.log(`Server running on port: ${port}`)}))
    .catch((err) => console.log(err.message));

