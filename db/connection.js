const mongoose = require("mongoose");

mongoose
  .connect("mongodb://srv-captain--sensors-db/sensors?authMode=scram-sha1", {
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
