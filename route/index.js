const router = require("express").Router();
const random = require("./random.route");
router.use("/", random);
router.get("/", (req, res) => {
  res.json({ msg: "hello world" });
});
module.exports = router;
