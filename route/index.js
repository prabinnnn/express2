const router = require("express").Router();
const random = require("./random.route");
const ran = require("./ran.route");
const describe = require("./describe.route");
const propercase = require("./proper.route");
router.use("/proper", propercase);
router.use("/describe", describe);
router.use("/ran", ran);
router.use("/random", random);

router.get("/", (req, res) => {
  res.json({ msg: "hello world" });
});

module.exports = router;
