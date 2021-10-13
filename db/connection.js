const mongoose = require("mongoose");

mongoose
  .connect("mongodb://srv-captain--my-mongodb/mydatabase", {
    useMongoClient: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Error Connecting to Database");
    console.log(err.message);
  });
