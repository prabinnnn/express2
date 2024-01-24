const router = require("express").Router();
const { propercase } = require("../utils/password");

router.get("/:name", (req, res) => {
  const result = propercase(req.params.name || req.query.name || req.body.name);
  res.json({ msg: result });
});

router.put("/:name", (req, res) => {
  const result = propercase(req.params.name || req.query.name || req.body.name);
  res.json({ msg: result });
});

router.post("/:name", (req, res) => {
  const result = propercase(req.params.name || req.query.name || req.body.name);
  res.json({ msg: result });
});

router.patch("/:name", (req, res) => {
  const result = propercase(req.params.name || req.query.name || req.body.name);
  res.json({ msg: result });
});

router.delete("/:name", (req, res) => {
  const result = propercase(req.params.name || req.query.name || req.body.name);
  res.json({ msg: result });
});

module.exports = router;
