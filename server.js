const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")
const port = 3000;
const app = express();
const db = mongoose.connection;
app.use(Router);
app.use(express.json());

mongoose.connect('mongodb+srv://mmonis440:Monis@786786@mongoconnect.cdk9r8i.mongodb.net/?retryWrites=true&w=majority',
  {
   // useNewUrlParser: true,
   // useFindAndModify: false,
   // useUnifiedTopology: true
  }
);
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(port ,()=>{
    console.log(`server is runnig on port 3000`)
});