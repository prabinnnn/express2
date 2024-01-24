const router = require("express").Router();
const { passwordgenerate } = require("../utils/pass");
router.get("/:name", (req, res) => {
  const result = passwordgenerate(
    req.params.name || req.query.name || req.body.name
  );
  res.json({ msg: result });
});
router.put("/:name", (req, res) => {
  const result = passwordgenerate(
    req.params.name || req.query.name || req.body.name
  );
  res.json({ msg: result });
});
router.post("/:name", (req, res) => {
  const result = passwordgenerate(
    req.params.name || req.query.name || req.body.name
  );
  res.json({ msg: result });
});
router.patch("/:name", (req, res) => {
  const result = passwordgenerate(
    req.params.name || req.query.name || req.body.name
  );
  res.json({ msg: result });
});
router.delete("/:name", (req, res) => {
  const result = passwordgenerate(
    req.params.name || req.query.name || req.body.name
  );
  res.json({ msg: result });
});
module.exports = router;
