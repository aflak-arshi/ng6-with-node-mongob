require("dotenv").config();
const mongoose = require("mongoose");
const createExpressApp = require("./server/create-express-app");
const port = process.env.PORT || 3000;

mongoose.connect(process.env.DB_CONN, (err, db) => {
  if (err) {
    console.log("connection failed with message");
    console.log(err);
    return;
  }
  console.log("connected to mongodb");
  createExpressApp(db).listen(port, () => {
    database = db;
    console.log(`Server is listening on port ${port}`);
  });
});
