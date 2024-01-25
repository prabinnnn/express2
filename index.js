const express = require("express");
const app = express();
const indexofrouter = require("./route");
app.use("/", indexofrouter);
app.use((err, req, res, next) => {
  err = err ? err.toString() : "something went wrong";
  res.status(500).json({ msg: err });
});
app.listen(8000, () => {
  console.log("app is runing");
});
