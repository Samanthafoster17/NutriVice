const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require('passport');
const app = express();
const secretOrKey = "secret";
const routes = require("./routes/api/user-route");
const path = require("path");
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
// connect to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nutrivicedb",
  {useNewUrlParser: true}
) 
.then(() => console.log("Successful connection to mongoDB"))
.catch( err => console.log(err));

app.use(express.json());

app.use(passport.initialize());

app.use(routes);
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



require('./config/passport')(passport);

app.use('./api/users', require('./routes/api/user-route'));

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});