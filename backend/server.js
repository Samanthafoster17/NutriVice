const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3002;
// connect to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nutrivice");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(require("./routes/api-routes.js"));

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});