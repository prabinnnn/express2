const express = require("express");
const app = express();
app.use("/", indexofrouter);
const indexofrouter = require("../route");
app.listen(8000, () => {
  console.log("app is runing");
});
